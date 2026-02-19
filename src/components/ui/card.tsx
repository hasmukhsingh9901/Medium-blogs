import { cva } from "class-variance-authority";
import type React from "react";

const cardVariants = cva(
  "rounded-lg border bg-card text-card-foreground shadow-sm  ",
  {
    variants: {
      variant: {
        default: "border-border",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default";
}

const Card: React.FC<CardProps> = ({ className, variant, ...props }) => {
  return <div className={cardVariants({ variant, className })} {...props} />;
};

Card.displayName = "Card";

export { Card, cardVariants };
