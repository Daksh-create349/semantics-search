import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import { OllamaEmbeddings } from "@langchain/ollama";
import { MemoryVectorStore } from "@langchain/classic/vectorstores/memory";

async function main() {
  const loader = new PDFLoader("./nke-10k-2023.pdf");
  const docs = await loader.load();

  const textSplit = new RecursiveCharacterTextSplitter({
    chunkSize: 1000,
    chunkOverlap: 200,
  });

  const splits = await textSplit.splitDocuments(docs);

  const embeddingModel = new OllamaEmbeddings({
    model: "nomic-embed-text:latest",
  });

  const store = await MemoryVectorStore.fromDocuments(
    splits,
    embeddingModel
  );

  const result = await store.similaritySearch(
    "When was Nike founded?",
    3
  );

  result.forEach((doc, i) => {
    console.log(`\nResult ${i + 1}:`);
    console.log(doc.pageContent);
  });
}


main();