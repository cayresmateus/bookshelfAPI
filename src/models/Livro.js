import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
  {
    id: {type: String},
    titulo: {
      type: String, 
      required: [true, "O título do livro é obrigátorio"]},
    autor: {
      type: mongoose.Schema.Types.ObjectId, 
      ref: "autores", 
      required: [true, "O autor do livro é obrigátorio"]},
    editora: {
      type: String, 
      required: [true, "A editora do livro é obrigatória"]},
    numeroPaginas: {
      type: Number,
      min:[10, "O numero de páginas deve estar entre 10 e 5000"],
      max:[5000, "O numero de páginas deve estar entre 10 e 5000"]
    }
  },
  {
    versionKey:false
  }
);

const livros= mongoose.model("livros", livroSchema);

export default livros;