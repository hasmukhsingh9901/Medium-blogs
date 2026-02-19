import React, { useState } from 'react';
import './InteractiveCounter.css';
import { Button } from "@/components/ui/button";

const InteractiveCounter: React.FC = () => {
    const [count, setCount] = useState<number>(0);

    return (
        <div className="counter-container">
            <h2>React Logic Demo (TSX)</h2>
            <p>This component uses <strong>React's useState</strong> with TypeScript.</p>

            <div className="counter-controls">
                <Button variant="outline" size="icon" onClick={() => setCount(count - 1)}>-</Button>
                <span className="count-display">{count}</span>
                <Button variant="outline" size="icon" onClick={() => setCount(count + 1)}>+</Button>
            </div>

            <p className="status">
                Current Mode: {count % 2 === 0 ? '🔵 Even' : '🔴 Odd'}
            </p>
        </div>
    );
};

export default InteractiveCounter;
