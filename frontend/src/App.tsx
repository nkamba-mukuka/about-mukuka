import React, { useState } from "react";
import Scene from "./components/Scene";
import QuestionInput from "./components/QuestionInput";
import { askAI } from "./api/askAI";
import { logInteraction } from "./services/firestore";
import "./App.css";

function App() {
  const [currentResponse, setCurrentResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleMenuSelect = async (item: string) => {
    setIsLoading(true);
    setCurrentResponse(null);
    
    try {
      const response = await askAI("menu", item);
      setCurrentResponse(response);
      // Log interaction to Firestore (optional analytics)
      await logInteraction("menu", item, response);
    } catch (error) {
      setCurrentResponse("Opps! Something went wrong ☕ Let me try that again!");
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuestionSubmit = async (question: string) => {
    setIsLoading(true);
    setCurrentResponse(null);
    
    try {
      const response = await askAI("question", question);
      setCurrentResponse(response);
      // Log interaction to Firestore (optional analytics)
      await logInteraction("question", question, response);
    } catch (error) {
      setCurrentResponse("Opps! Something went wrong ☕ Let me try that again!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App relative w-full h-screen overflow-hidden">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-20 p-6 bg-gradient-to-r from-pink-pastel/80 to-lavender/80 backdrop-blur-sm">
        <h1 className="text-4xl font-bold text-center text-purple-900 font-girly">
          ☕ Latte AI Portfolio ✨
        </h1>
        <p className="text-center text-purple-700 mt-2 font-girly">
          Ask the barista about Mukuka's portfolio!
        </p>
      </header>

      {/* 3D Scene */}
      <div className="w-full h-full">
        <Scene
          currentResponse={currentResponse}
          onMenuSelect={handleMenuSelect}
          isLoading={isLoading}
        />
      </div>

      {/* Question Input */}
      <QuestionInput onSubmit={handleQuestionSubmit} isLoading={isLoading} />

      {/* Floating particles decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-pink-soft/30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
