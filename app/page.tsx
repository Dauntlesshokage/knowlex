"use client";

import { api } from "@/convex/_generated/api";

import {
  Authenticated,
  Unauthenticated,
  useMutation,
  useQuery,
} from "convex/react";
import DocumentCard from "./document-card";
import CreateDocumentButton from "./create-document-button";

export default function Home() {
  const fetchDocument = useQuery(api.documents.getDocuments);
  const createDocument = useMutation(api.documents.createDocument);
  return (
    <main className="p-24 space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">My Documents</h1>
        <CreateDocumentButton />
      </div>
      <div className="grid grid-cols-4 gap-8">
        {fetchDocument?.map((documents) => (
          <DocumentCard document={documents} />
        ))}
      </div>
    </main>
  );
}
