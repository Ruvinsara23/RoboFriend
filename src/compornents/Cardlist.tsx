import React from "react";
import Card from './Card';
import { Robot } from "../App";

type CardListProps = {
  robots: Robot[];
}

function CardList({ robots }: CardListProps) {
  const cardComponent = robots.map((robot, i) => (
    <Card key={i} robot={robot} />
  ));

  return <div>{cardComponent}</div>;
}

export default CardList;