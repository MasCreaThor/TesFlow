// Colección: users (información de autenticación)
{
  _id: ObjectId,
  email: String,
  password: String, // Hashed
  resetPasswordToken: String,
  resetPasswordExpires: Date,
  createdAt: Date,
  lastLogin: Date
}

// Colección: people (información personal y de perfil)
{
  _id: ObjectId,
  userId: ObjectId,  // Referencia a users
  name: String,
  studyGoals: [String],
  profileStatus: String, // 'active', 'inactive'
  createdAt: Date,
  updatedAt: Date
}

// Colección: documents
{
  _id: ObjectId,
  userId: ObjectId,  // Referencia al usuario
  title: String,
  fileName: String,
  fileUrl: String,
  tags: [String],
  status: String,    // 'processing', 'completed', 'error'
  processedContent: {
    keyConcepts: [String],
    definitions: [{
      term: String,
      definition: String
    }],
    topics: [String]
  },
  uploadedAt: Date,
  processedAt: Date
}

// Colección: questions
{
  _id: ObjectId,
  documentId: ObjectId,  // Referencia al documento fuente
  topic: String,
  questionText: String,
  options: [{
    text: String,
    isCorrect: Boolean
  }],
  explanation: String,
  difficulty: String,    // 'easy', 'medium', 'hard'
  tags: [String],
  createdAt: Date
}

// Colección: userResponses
{
  _id: ObjectId,
  userId: ObjectId,      // Referencia al usuario
  questionId: ObjectId,  // Referencia a la pregunta
  selectedOption: String,
  isCorrect: Boolean,
  timeSpent: Number,     // Tiempo en segundos
  answeredAt: Date
}

// Colección: studySessions
{
  _id: ObjectId,
  userId: ObjectId,
  topics: [String],
  questions: [{
    questionId: ObjectId,
    status: String,      // 'pending', 'answered', 'skipped'
    score: Number
  }],
  totalQuestions: Number,
  correctAnswers: Number,
  startTime: Date,
  endTime: Date,
  duration: Number       // Duración en minutos
}

// Colección: userProgress
{
  _id: ObjectId,
  userId: ObjectId,
  topic: String,
  metrics: {
    totalAttempts: Number,
    correctAnswers: Number,
    averageScore: Number,
    timeSpent: Number,   // Tiempo total en minutos
    lastStudied: Date
  },
  weakAreas: [String],
  strongAreas: [String],
  updatedAt: Date
}