import React, { useState, useEffect } from "react";
import {
  useFeedQuery,
  useCreateDraftMutation,
  useNoteLazyQuery,
  useUpdateNoteMutation,
} from "../../generated/graphql";
import { Note } from "./interfaces";
const Notes: React.FC = () => {
  const [NoteDataEdit, setNoteDataEdit] = useState<Note>({
    id: 0,
    content: "",
    createdAt: "",
  });
  const { data: notes, refetch } = useFeedQuery({
    onCompleted: (result) => {
      setNoteDataEdit({
        id: result.feed[0].id,
        content: String(result.feed[0].content),
        createdAt: String(result.feed[0].createdAt),
      });
    },
  });
  const [newDraft] = useCreateDraftMutation();
  const [updateNote] = useUpdateNoteMutation({
    variables: {
      id: NoteDataEdit.id,
      content: NoteDataEdit.content,
    },
  });
  const [getNote] = useNoteLazyQuery({
    onCompleted: (result) => {
      setNoteDataEdit({
        id: result.note?.id || 0,
        content: String(result.note?.content),
        createdAt: String(result.note?.createdAt),
      });
    },
  });
  const addNewDraft = () => {
    newDraft();
    refetch();
  };
  const selectNote = (id: number) => {
    getNote({
      variables: {
        id: id,
      },
    });
  };
  const onChangeContent = (e: { target: { value: string } }) =>
    setNoteDataEdit({
      ...NoteDataEdit,
      content: String(e.target.value),
    });
  useEffect(() => {
    const interval = setInterval(() => {
      updateNote();
    }, 7000);
    return () => clearInterval(interval);
  });

  return (
    <div className="h-screen flex">
      <div className="bg-gray-100 w-1/5 overflow-y-scroll">
        <div className="grid grid-cols-3 gap-4 items-center">
          <div className="col-span-2 text-left m-5 text-gray-900 font-extrabold text-4xl">
            Notes
          </div>
          <div className="col-span-1 text-left m-5 text-gray-900 font-extrabold text-sm">
            <button
              onClick={addNewDraft}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.23933 20V10.7421H0V9.22078H9.23933V0H10.7236V9.22078H20V10.7421H10.7236V20H9.23933Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>
        </div>
        {notes?.feed.map((note) => (
          <div
            key={note.id}
            onClick={() => selectNote(note.id)}
            className={
              "p-4 border-t border-b " +
              (NoteDataEdit.id === note.id ? "bg-orange-200" : "")
            }
          >
            <div className="text-2xl text-gray-900 font-bold">
              {note.content ? note.content?.replace(/ .*/, "") : "Draft"}
            </div>
            <div className="text-sm text-gray-300">
              <span className="text-gray-800 pr-5">
                {note.createdAt.replace("T", " ").replace("Z", "")}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex-1 flex overflow-hidden bg-gray-200">
        <div className="flex-1">
          <div className="text-center mt-4 text-gray-700"></div>
          <textarea
            className=" overflow-y-scroll mt-4 h-full w-full bg-gray-200 p-10 outline-none"
            name="description"
            value={NoteDataEdit.content}
            onChange={(e) => onChangeContent(e)}
          />
        </div>
      </div>
    </div>
  );
};

export default Notes;
