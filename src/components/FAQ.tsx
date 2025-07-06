import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

export default function FaqItem({ question, answer }: { question: string, answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-blue-100 rounded p-4 bg-white shadow hover:shadow-md transition">
      <button
        className="w-full text-left flex justify-between items-center font-medium text-blue-800"
        onClick={() => setOpen(!open)}
      >
        <span>{question}</span>
        {open ? <Minus size={18} /> : <Plus size={18} />}
      </button>
      {open && <p className="mt-2 text-sm text-gray-600">{answer}</p>}
    </div>
  );
}