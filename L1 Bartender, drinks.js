https://www.codewars.com/kata/568dc014440f03b13900001d/train/javascript

    function getDrinkByProfession(param){
        let str = param.toLowerCase()
        str = str.split(' ').map((el) => el.charAt(0).toUpperCase() + el.substring(1))
        let res = str.join(' ')
        switch (res) {
            case 'Jabroni': return "Patron Tequila"; break;
            case 'School Counselor': return "Anything with Alcohol"; break;
            case "Programmer": return "Hipster Craft Beer"; break;
            case "Bike Gang Member": return "Moonshine"; break;
            case "Politician": return "Your tax dollars"; break;
            case "Rapper": return "Cristal"; break;
            default: return "Beer";
        }
    }