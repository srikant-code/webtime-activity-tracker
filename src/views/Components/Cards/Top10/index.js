import Flex from "../../Container";

const OneCard = () => {
  return <div></div>;
};

const Top10Cards = ({
  data = [
    {
      image: "❤",
      text: "Trippie Red - Figma",
    },
    {
      image: "❤",
      text: "Trippie Red - Figma",
    },
  ],
}) => {
  return (
    <Flex>
      {data.map((item, index) => {
        return (index + 1) % 5 === 0 ? <Flex></Flex> : <OneCard />;
      })}
    </Flex>
  );
};

export default Top10Cards;
