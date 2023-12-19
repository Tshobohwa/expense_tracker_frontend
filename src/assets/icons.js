import foodIcon from "../../public/hamburger.png";
import rentIcon from "../../public/rent.png";
import transportationIcon from "../../public/man.png";
import clothesIcon from "../../public/clothing.png";
import otherSpending from "../../public/spending.png";
import exit from "../../public/exit.png";
import income from "../../public/income.png";
import compensation from "../../public/compensation.png";

const icons = {
  foodImg: foodIcon,
  rentImg: rentIcon,
  transportationImg: transportationIcon,
  clothesImg: clothesIcon,
  othersImg: otherSpending,
  exitImg: exit,
  incomeImg: income,
  compensationImg: compensation,
};

export const cathegoryIcons = [
  { id: 2, name: "food", image: foodIcon },
  { id: 3, name: "rent", image: rentIcon },
  { id: 4, name: "transportation", image: transportationIcon },
  { id: 5, name: "clothe", image: clothesIcon },
  { id: 6, name: "other", image: otherSpending },
];

export const {
  foodImg,
  rentImg,
  transportationImg,
  clothesImg,
  othersImg,
  exitImg,
  incomeImg,
  compensationImg,
} = icons;
