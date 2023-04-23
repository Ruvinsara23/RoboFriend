
import Card from './Card';
import { Robot } from "../App";

type CardListProps = {
  robots: Robot[];
}

const CardList=({ robots }: CardListProps)=> {
return(<div>
  {robots.map((robot, i) => (
    <Card key={i} robot={robot} />
  ))};
</div>);

}

export default CardList;