import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { useSetAtom } from "jotai";
import React, { useState } from "react";
import { createNewInternalSolutionFileAtom } from "../../atoms/editor";
import { AlgoliaEditorSolutionFile } from "../../models/algoliaEditorFile";
import Select from "../Select";
const divisions = [
  "General",
  "Bronze",
  "Silver",
  "Gold",
  "Platinum",
  "Advanced",
] as const; // hack to allow typeof divisions[number] by marking array as readonly
export default function AddFileModal(props) {
  const [division, setDivision] =
    useState<(typeof divisions)[number]>("General");
  const [fileStatus, setFileStatus] = useState<
    "Create File" | "Creating File..."
  >("Create File");
  const [fileURL, setFileURL] = useState("");
  const createSol = useSetAtom(createNewInternalSolutionFileAtom);
  return (
    <Dialog
      open={props.isOpen}
      onClose={props.onClose}
      className="relative z-10"
    >
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[enter]:ease-out data-[leave]:duration-200 data-[leave]:ease-in dark:bg-gray-700/75"
      />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-screen items-center justify-center px-4 pt-4 pb-20 text-center sm:p-0">
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <DialogPanel
            transition
            className="flex w-full max-w-xl transform flex-col items-start rounded-lg bg-white p-5 shadow-lg transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[enter]:ease-out data-[leave]:duration-200 data-[leave]:ease-in data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95 dark:bg-black dark:text-white"
          >
            <h3 className="text-lg font-bold">Enter Problem URL</h3>
            <input
              type="url"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm dark:border-gray-700 dark:bg-gray-900"
              placeholder="e.g. https://codeforces.com/contest/1920/problem/C"
              onChange={(e) => setFileURL(e.target.value)}
            />
            <p className="mt-2">Problem Division</p>
            <div className="relative mt-2 w-full rounded-md shadow-sm dark:bg-black">
              <Select
                options={[
                  "General",
                  "Bronze",
                  "Silver",
                  "Gold",
                  "Platinum",
                  "Advanced",
                ].map((div) => ({
                  label: div,
                  value: div.toLowerCase(),
                }))}
                onChange={(e) => setDivision(e.value)}
              />
            </div>
            <button
              className="btn mt-2"
              disabled={fileStatus === "Creating File..."}
              onClick={async () => {
                try {
                  setFileStatus("Creating File...");
                  const info = (
                    await fetch("/api/fetch-metadata", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({ url: fileURL }),
                    })
                      .then((res) => res.json())
                      .catch((e) => {
                        setFileStatus("Create File");
                        props.onClose();
                        console.error(e);
                      })
                  ).data;
                  props.onClose();
                  createSol({
                    id: info.uniqueId,
                    title: info.name,
                    source: info.source,
                    division,
                    problemModules: [],
                  } as unknown as AlgoliaEditorSolutionFile);
                  setFileStatus("Create File");
                } catch (e) {
                  setFileStatus("Create File");
                  props.onClose();
                  alert(e);
                }
              }}
            >
              {fileStatus}
            </button>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
