import BagelIcon from './food_category/bagel_icon.png';
import BaobunIcon from './food_category/baobun_icon.png';
import BentoIcon from './food_category/bento_icon.png';
import CheeseIcon from './food_category/cheese_icon.png';
import CherryIcon from './food_category/cherry_icon.png';
import ChocolateIcon from './food_category/chocolate_icon.png';
import FriesIcon from './food_category/fries_icon.png';
import FryIcon from './food_category/fry_icon.png';
import GreenTeaIcon from './food_category/greenTea_icon.png';
import HamburgerIcon from './food_category/hamburger_icon.png';
import HotdogIcon from './food_category/hotdog_icon.png';
import IcecreamIcon from './food_category/icecream_icon.png';
import NachosIcon from './food_category/nachos_icon.png';
import NoodlesIcon from './food_category/noodles_icon.png';
import OmletteIcon from './food_category/omlette_icon.png';
import PizzaIcon from './food_category/pizza_icon.png';
import SaladIcon from './food_category/salad_icon.png';
import SandwichIcon from './food_category/sandwich_icon.png';
import SandwichIcon2 from './food_category/sandwich2_icon.png';
import StrawberryIcon from './food_category/strawberry_icon.png';
import SushiIcon from './food_category/sushi_icon.png';
import WineCheeseIcon from './food_category/whineChese_icon.png';
import WineIcon from './food_category/wines_icon.png';
import WrapIcon from './food_category/wrap_icon.png';

export const Icons = [
    {"bagel_icon": BagelIcon},
    {"baobun_icon": BaobunIcon},
    {"bento_icon": BentoIcon},
    {"cheese_icon": CheeseIcon},
    {"cherry_icon": CherryIcon},
    {"cholocolate_icon": ChocolateIcon} ,
    {"fries_icon": FriesIcon},
    {"fry_icon": FryIcon} ,
    {"greenTea_icon": GreenTeaIcon},
    {"hamburger_icon": HamburgerIcon},
    {"hotdog_icon": HotdogIcon} ,
    {"icecream_icon": IcecreamIcon} ,
    {"nachos_icon": NachosIcon} ,
    {"noodles_icon": NoodlesIcon} ,
    {"omlette_icon": OmletteIcon} ,
    {"pizza_icon": PizzaIcon} ,
    {"salad_icon": SaladIcon} ,
    {"sandwich_icon": SandwichIcon} ,
    {"sandwich2_icon": SandwichIcon2}, 
    {"strawberry_icon": StrawberryIcon},
    {"sushi_icon": SushiIcon} ,
    {"wineCheese_icon": WineCheeseIcon},
    {"wine_icon": WineIcon} , 
    {"wrap_icon": WrapIcon} 
]

export const getAllFoodCategories = () => {
    return Icons.map(x =>  Object.values(x).toString())
}

export const getFoodCategoryByName = (name) => {
    for (let i = 0; i < Icons.length; i++) {
        if (Icons[i][name]) {
            return Icons[i][name];
        }
    }

    return null;
}

export default Icons;