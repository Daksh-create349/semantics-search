# Semantic Search

A simple semantic search application designed to process PDF documents and perform similarity searches using vector embeddings.

## Tech Stack
- **LangChain**: For document loading, text splitting, and vector store management.
- **Ollama**: For generating local embeddings using the `nomic-embed-text` model.
- **TypeScript**: For robust and type-safe development.

## How it Works
1. **Document Loading**: Loads PDF files (like the included Nike 10K report) using `PDFLoader`.
2. **Text Splitting**: Breaks the document into manageable chunks with overlap to preserve context.
3. **Embedding Generation**: Uses Ollama to convert text chunks into high-dimensional vectors.
4. **Similarity Search**: Stores vectors in an in-memory store and retrieves the most relevant sections based on a user query.

## Getting Started
### Prerequisites
- Install [Ollama](https://ollama.com/)
- Pull the embedding model:
  ```bash
  ollama pull nomic-embed-text
  ```

### Installation
```bash
npm install
```

### Running the Project
```bash
# To run the TypeScript file directly (if using ts-node) or compile and run
npm start
```

Made by Daksh Ranjan Srivastava
