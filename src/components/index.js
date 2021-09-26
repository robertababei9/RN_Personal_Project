import CustomInput from './Input';
import CustomButton from './Button';
import _RowInput from './RowInput';
import _SearchBox from './SearchBox';
import _Price from './Price';
import _CategoryCard from './CategoryCard';

const components = {
    CustomInput,
    CustomButton,
    _RowInput,
    _SearchBox,
    _Price,
    _CategoryCard,
};

export const Input = CustomInput;
export const Button = CustomButton;
export const RowInput = _RowInput;
export const SearchBox = _SearchBox;
export const Price = _Price;
export const CategoryCard = _CategoryCard;

export default components;