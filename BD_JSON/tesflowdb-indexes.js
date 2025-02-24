// Índices para la colección users
db.users.createIndex({ "email": 1 }, { unique: true });
db.users.createIndex({ "resetPasswordToken": 1 }, { sparse: true });
db.users.createIndex({ "resetPasswordExpires": 1 }, { sparse: true });
db.users.createIndex({ "lastLogin": -1 });

// Índices para la colección people
db.people.createIndex({ "userId": 1 }, { unique: true });
db.people.createIndex({ "studyGoals": 1 });
db.people.createIndex({ "profileStatus": 1 });

// Índices para la colección documents
db.documents.createIndex({ "userId": 1 });
db.documents.createIndex({ "tags": 1 });
db.documents.createIndex({ "status": 1 });
db.documents.createIndex({ "processedContent.topics": 1 });
db.documents.createIndex({ 
    "userId": 1, 
    "tags": 1, 
    "status": 1 
}, { name: "compound_document_search" });

// Índices para la colección questions
db.questions.createIndex({ "documentId": 1 });
db.questions.createIndex({ "topic": 1 });
db.questions.createIndex({ "tags": 1 });
db.questions.createIndex({ "difficulty": 1 });
db.questions.createIndex({ 
    "topic": 1, 
    "difficulty": 1 
}, { name: "question_search" });

// Índices para la colección userResponses
db.userResponses.createIndex({ "userId": 1 });
db.userResponses.createIndex({ "questionId": 1 });
db.userResponses.createIndex({ "answeredAt": -1 });
db.userResponses.createIndex({ 
    "userId": 1, 
    "questionId": 1, 
    "answeredAt": -1 
}, { name: "user_response_history" });

// Índices para la colección studySessions
db.studySessions.createIndex({ "userId": 1 });
db.studySessions.createIndex({ "startTime": -1 });
db.studySessions.createIndex({ 
    "userId": 1, 
    "topics": 1 
}, { name: "user_topic_sessions" });

// Índices para la colección userProgress
db.userProgress.createIndex({ "userId": 1 });
db.userProgress.createIndex({ "topic": 1 });
db.userProgress.createIndex({ 
    "userId": 1, 
    "topic": 1 
}, { unique: true, name: "user_topic_progress" });

// Índices TTL para documentos temporales (como tokens de reset de contraseña)
db.users.createIndex({ "resetPasswordExpires": 1 }, { 
    expireAfterSeconds: 0,
    partialFilterExpression: {
        resetPasswordExpires: { $exists: true }
    }
});