import { useState, useEffect } from "react";
import CreatableSelect from 'react-select/creatable';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import Box from "@mui/material/Box";
import Slider from '@mui/material/Slider';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Option from "react-select/dist/declarations/src/components/Option";

// User Create new Options

// const createOption = (label: string) => ({
//     label,
//     value: label.toLowerCase().replace(/\W/g, ''),
//   });
  
//   const defaultOptions = [
//     createOption('Комикс'),
//     createOption('Манга'),
//     createOption('Яой'),
//   ];



// export interface optionsType {
//     readonly value: string;
//     readonly label: string;
//     readonly color: string;
//     readonly isFixed?: boolean;
//     readonly isDisabled?: boolean;
//   }

// const groupBadgeStyles: CSSProperties = {
//     backgroundColor: '#EBECF0',
//     borderRadius: '2em',
//     color: '#172B4D',
//     display: 'inline-block',
//     fontSize: 12,
//     fontWeight: 'normal',
//     lineHeight: '1',
//     minWidth: 1,
//     padding: '0.16666666666667em 0.5em',
//     textAlign: 'center',
//   };

//   const optionsType = {
//     label: 'Комикс',
//     options: {
//         value:'comics',
//         label:'Комикс',
//         isDisabled: true
//     }
//   }

// Slider
function valuetext(value: number) {
    return `${value} год`;
  }
  
  const marks = [
    {
      value: 1990,
      label: '1990',
    },
    {
      value: 1996,
      label: '1996',
    },
    {
      value: 2002,
      label: '2002',
    },
    {
      value: 2008,
      label: '2008',
    },
    {
      value: 2014,
      label: '2014',
    },
    {
      value: 2019,
      label: '2019',
    },
    // {
    //   value: 2016,
    //   label: '2016',
    // },
    {
      value: 2023,
      label: '2023',
    },
  ];
export default function catalogue(){
// Select and Option's   
    interface Option {
        readonly label: string;
        readonly value: string;
    }

const defaultOptions = [
    [
        {label: "Комикс", value: "comics"},
        {label: "Манга", value: "manga"},
    ],
    [
        {label: "Гарем", value:"garem"},
        {label: "Шлюхи", value:"hoes"},
    ],
    [
        {label: "Закончен", value: "end"},
        {label: "Продолжается", value: "continue"},
    ],
    [
        {label: "Для всех", value: "forAll"},
        {label: "16+", value: "sixteen" },
        {label: "18+", value: "eighteen"}
    ]
]


const animatedComponents = makeAnimated();

const customStyles = {
    control: (base, state) => ({
        ...base,
        //   background: theme ? "#f1f1f1" : "black",
        
        // match with the menu
        borderRadius: '4em',
        // Overwrittes the different states of border
        //   borderColor: state.isFocused ? "#f7f7f8" : "#f7f7f8",
        // Removes weird border around container
        boxShadow: state.isFocused ? null : null,
        "&:hover": {
            // Overwrittes the different states of border
            // borderColor: state.isFocused ? "#5fa9c1" : "#4c879a"
        }
        }),
        menu: base => ({
        ...base,
        background: "#f1f1f1",
        // override border radius to match the box
        borderRadius: 0,
        // kill the gap
        marginTop: 0
        }),
        menuList: base => ({
            ...base,
            // kill the white space on first and last option
            padding: 0
        })
    };

    // Switch mode catalog
    const handleClickSquare = () => {
        const sort_square = document.getElementById('sort_square'),
        sort_lines = document.getElementById('sort_lines'),
        comics_square = document.getElementById("comics_square"),
        comics_lines = document.getElementById("comics_lines");
        sort_square.classList.add("active");
        sort_lines.classList.remove('active');
        comics_square.classList.remove("hidden");
        comics_lines.classList.add("hidden");
    };

    const handleClickLines = () => {
        const sort_square = document.getElementById('sort_square'),
        sort_lines = document.getElementById('sort_lines'),
        comics_square = document.getElementById("comics_square"),
        comics_lines = document.getElementById("comics_lines");
        sort_square.classList.remove('active');
        sort_lines.classList.add('active');
        comics_square.classList.add('hidden');
        comics_lines.classList.remove('hidden');
        
    };

    // Select's with Option's
    const [isLoading, setIsLoading] = useState(false);
    const [options, setOptions] = useState(defaultOptions);
    const [value, setValue] = useState<Option | null>();
    const handleClearValue = () => {
        setValue(null);
    }

    // const handleCreate = (inputValue: string) => {
    //     setIsLoading(true);
    //     setTimeout(() => {
    //     const newOption = createOption(inputValue);
    //     setIsLoading(false);
    //     setOptions((prev) => [...prev, newOption]);
    //     setValue(newOption);
    //     }, 1000);
    // };

    // Slider
    const [valueNumber, setValueNumber] = useState<number[]>([1990, 2023]);
    const handleChange = (event: Event, newValue: number | number[]) => {
      setValueNumber(newValue as number[]);
    };


    // ChipChip
    // const handleClickChip = () => {
    //     console.info('You clicked the Chip.');
    //   };
    const [selected, setSelected] = useState(false);



    return (
        <div className="h-screen w-full" >
            <div className="sm:max-w-[1200px] mx-auto flex flex-row flex-nowrap pt-10 overflow-hidden text-primary-dark dark:text-primary">
                <div className="flex flex-col w-full max-xl:ml-6 mr-6">
                    <h1 className="font-bold text-4xl">Каталог</h1>

                    {/* Main Catalog */}
                    <div className="max-w-[900px] w-full flex flex-col">
                        <div className="flex items-center justify-end">
                            <button onClick={handleClickSquare} id="sort_square" className="sort_square active hover:text-btn-secondary active:text-btn-secondary duration-200 px-2 py-2 rounded-lg hover:bg-secondary dark:hover:bg-secondary-dark">
                                <svg xmlns="http://www.w3.org/2000/svg" height="19" width="19" viewBox="0 -960 960 960" fill="currentColor">
                                    <path d="M226-160q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19ZM226-414q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19ZM226-668q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Z"/>
                                </svg>
                            </button>
                            <button onClick={handleClickLines} id="sort_lines" className="sort_lines hover:text-btn-secondary active:text-btn-secondary duration-200 px-2 py-2 rounded-lg hover:bg-secondary dark:hover:bg-secondary-dark">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" width="22" viewBox="0 -960 960 960" fill="currentColor">
                                    <path d="M120-240v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"/>
                                    </svg>
                            </button>
                        </div>

                        {/* Catalog Image's */}
                            {/* Square */}
                        <div id="comics_square" className="flex flex-row flex-wrap ">

                            <a className="max-w-[170px] flex flex-col cursor-pointer mr-3 mb-3">
                                <img src="https://placehold.co/170x250" alt="" className="mb-1 rounded-md hover:brightness-110 duration-300" />
                                <div className="flex flex-row justify-between items-center font-bold text-xs text-[#919191] mb-1">
                                    <p className="">Комикс</p>
                                    <div className="flex flex-row items-center">
                                        <p>10</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" fill="currentColor" className="bi bi-eye-fill ml-1" viewBox="0 0 16 16">
                                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                                            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                                        </svg>
                                    </div>
                                </div>
                                <h3 className="hover:text-btn-secondary duration-300">Моя геройская академия</h3>
                            </a>

                            <a className="max-w-[170px] flex flex-col cursor-pointer mr-3 mb-3">
                                <img src="https://placehold.co/170x250" alt="" className="mb-1 rounded-md hover:brightness-110 duration-300" />
                                <div className="flex flex-row justify-between items-center font-bold text-xs text-[#919191] mb-1">
                                    <p className="">Комикс</p>
                                    <div className="flex flex-row items-center">
                                        <p>10</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" fill="currentColor" className="bi bi-eye-fill ml-1" viewBox="0 0 16 16">
                                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                                            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                                        </svg>
                                    </div>
                                </div>
                                <h3 className="hover:text-btn-secondary duration-300">Моя геройская академия</h3>
                            </a>
                            
                            <a className="max-w-[170px] flex flex-col cursor-pointer mr-3 mb-3">
                                <img src="https://placehold.co/170x250" alt="" className="mb-1 rounded-md hover:brightness-110 duration-300" />
                                <div className="flex flex-row justify-between items-center font-bold text-xs text-[#919191] mb-1">
                                    <p className="">Комикс</p>
                                    <div className="flex flex-row items-center">
                                        <p>10</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" fill="currentColor" className="bi bi-eye-fill ml-1" viewBox="0 0 16 16">
                                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                                            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                                        </svg>
                                    </div>
                                </div>
                                <h3 className="hover:text-btn-secondary duration-300">Моя геройская академия</h3>
                            </a>
                            
                            <a className="max-w-[170px] flex flex-col cursor-pointer mr-3 mb-3">
                                <img src="https://placehold.co/170x250" alt="" className="mb-1 rounded-md hover:brightness-110 duration-300" />
                                <div className="flex flex-row justify-between items-center font-bold text-xs text-[#919191] mb-1">
                                    <p className="">Комикс</p>
                                    <div className="flex flex-row items-center">
                                        <p>10</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" fill="currentColor" className="bi bi-eye-fill ml-1" viewBox="0 0 16 16">
                                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                                            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                                        </svg>
                                    </div>
                                </div>
                                <h3 className="hover:text-btn-secondary duration-300">Моя геройская академия</h3>
                            </a>
                            
                            <a className="max-w-[170px] flex flex-col cursor-pointer mr-3 mb-3">
                                <img src="https://placehold.co/170x250" alt="" className="mb-1 rounded-md hover:brightness-110 duration-300" />
                                <div className="flex flex-row justify-between items-center font-bold text-xs text-[#919191] mb-1">
                                    <p className="">Комикс</p>
                                    <div className="flex flex-row items-center">
                                        <p>10</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" fill="currentColor" className="bi bi-eye-fill ml-1" viewBox="0 0 16 16">
                                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                                            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                                        </svg>
                                    </div>
                                </div>
                                <h3 className="hover:text-btn-secondary duration-300">Моя геройская академия</h3>
                            </a>
                        </div>

                            {/* Lines */}
                        <div id="comics_lines" className="flex flex-col flex-nowrap hidden">

                            <a className="link_comCatalog--index w-full flex flex-col cursor-pointer mr-3 mb-3">
                                <div className="flex flex-row">
                                    <img src="https://placehold.co/170x250" alt="" className="w-[170px] mb-1 mr-2 rounded-md hover:brightness-110 duration-300" />
                                    <div className="flex flex-col mt-1"> 
                                        <h3 className="hover:text-btn-secondary duration-300 text-lg">Моя геройская академия</h3>
                                        <div className="flex flex-row text-sm text-[#919191] mb-3">
                                            <p className="mr-2">Комикс</p>
                                            <div className="flex flex-row items-center">
                                                <p>10</p>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" fill="currentColor" className="bi bi-eye-fill ml-1" viewBox="0 0 16 16">
                                                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                                                    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <p className="font-light hover:text-btn-secondary duration-300 text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, perspiciatis voluptatibus quas est voluptate nostrum soluta consequatur dolorum distinctio. Delectus nam praesentium assumenda magnam sed saepe? Dolore deleniti cum nam?</p>
                                    </div>
                                </div>
                            </a>

                            <a className="link_comCatalog--index w-full flex flex-col cursor-pointer mr-3 mb-3">
                                <div className="flex flex-row">
                                    <img src="https://placehold.co/170x250" alt="" className="w-[170px] mb-1 mr-2 rounded-md hover:brightness-110 duration-300" />
                                    <div className="flex flex-col mt-1"> 
                                        <h3 className="hover:text-btn-secondary duration-300 text-lg">Моя геройская академия</h3>
                                        <div className="flex flex-row text-sm text-[#919191] mb-3">
                                            <p className="mr-2">Комикс</p>
                                            <div className="flex flex-row items-center">
                                                <p>10</p>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" fill="currentColor" className="bi bi-eye-fill ml-1" viewBox="0 0 16 16">
                                                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                                                    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <p className="font-light hover:text-btn-secondary duration-300 text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, perspiciatis voluptatibus quas est voluptate nostrum soluta consequatur dolorum distinctio. Delectus nam praesentium assumenda magnam sed saepe? Dolore deleniti cum nam?</p>
                                    </div>
                                </div>
                            </a>
                            
                            <a className="link_comCatalog--index w-full flex flex-col cursor-pointer mr-3 mb-3">
                                <div className="flex flex-row">
                                    <img src="https://placehold.co/170x250" alt="" className="w-[170px] mb-1 mr-2 rounded-md hover:brightness-110 duration-300" />
                                    <div className="flex flex-col mt-1"> 
                                        <h3 className="hover:text-btn-secondary duration-300 text-lg">Моя геройская академия</h3>
                                        <div className="flex flex-row text-sm text-[#919191] mb-3">
                                            <p className="mr-2">Комикс</p>
                                            <div className="flex flex-row items-center">
                                                <p>10</p>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" fill="currentColor" className="bi bi-eye-fill ml-1" viewBox="0 0 16 16">
                                                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                                                    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <p className="font-light hover:text-btn-secondary duration-300 text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, perspiciatis voluptatibus quas est voluptate nostrum soluta consequatur dolorum distinctio. Delectus nam praesentium assumenda magnam sed saepe? Dolore deleniti cum nam?</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Filter */}
                <div className="max-w-[400px] w-full flex flex-col">
                    <div className="flex flex-col mx-12">
                        <div className="flex justify-between mt-12 mb-4">
                            <p className="">Фильтр</p>
                            {/* onClick={value ? () => setValue('') : null} */}
                            <button className="flex flex-row items-center justify-center hover:text-red-500 duration-200" onClick={() => {
                                 selected ? setSelected((s) => !s) : null;
                                 value !== null && handleClearValue();
                                 console.log(value);
                                 
                            }}>
                                Очистить <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-x pt-[2px]" viewBox="0 0 16 16">
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                            </button>
                        </div>
                        <Select
                            isMulti
                            isClearable
                            closeMenuOnSelect={false}
                            options={options[0]}
                            components={animatedComponents}
                            value={value}
                            placeholder='Типы'
                            noOptionsMessage={() => "Типы закончились"}
                            styles={customStyles}
                            className="my-react-select-container mb-2"
                            classNamePrefix="my-react-select"
                            />
                        
                        <Select
                            isMulti
                            isClearable
                            closeMenuOnSelect={false}
                            options={options[1]}
                            components={animatedComponents}
                            value={value}
                            placeholder='Жанры'
                            noOptionsMessage={() => "Жанры закончились"}
                            styles={customStyles}
                            className="my-react-select-container mb-2"
                            classNamePrefix="my-react-select"
                            />

                        <Select
                            isMulti
                            isClearable
                            closeMenuOnSelect={false}
                            options={options[2]}
                            components={animatedComponents}
                            value={value}
                            placeholder='Статус проекта'
                            noOptionsMessage={() => "Пусто"}
                            styles={customStyles}
                            className="my-react-select-container mb-2"
                            classNamePrefix="my-react-select"
                            />
                        
                        <Select
                            isMulti
                            isClearable
                            closeMenuOnSelect={false}
                            options={options[3]}
                            components={animatedComponents}
                            value={value}
                            placeholder='Возрастной рейтинг'
                            noOptionsMessage={() => "Пусто"}
                            styles={customStyles}
                            className="my-react-select-container mb-2"
                            classNamePrefix="my-react-select"
                            />
                        <div className="flex mt-3 mb-10">
                            <h1 className="font-light">Год выпуска</h1>    
                        </div> 
                        <div className="ml-4 mb-3">
                            <Box sx={{}}>
                                <Slider
                                    aria-label="Год выпуска"
                                    min={1990}
                                    max={2023}
                                    value={valueNumber}
                                    marks={marks}
                                    step={1}
                                    onChange={handleChange}
                                    valueLabelDisplay="on"
                                    getAriaValueText={valuetext}
                                />
                            </Box>
                        </div>

                        <div className="flex mb-2">
                            <h1 className="font-light">Количество глав</h1>    
                        </div> 
                        <Stack direction="row" spacing={1} className="font-light mb-2">
                            <Chip label="1-50" variant="outlined"
                            onClick={() => setSelected((s) => !s)}
                            color={selected ? "primary" : "default"}
                            variant={selected ? "default" : "outlined"}
                            />
                            <Chip label="50-120" variant="outlined" 
                            onClick={() => setSelected((s) => !s)}
                            color={selected ? "primary" : "default"}
                            variant={selected ? "default" : "outlined"}/>
                            <Chip label="120-200" variant="outlined" 
                            onClick={() => setSelected((s) => !s)}
                            color={selected ? "primary" : "default"}
                            variant={selected ? "default" : "outlined"}/>
                            <Chip label=">200" variant="outlined" 
                            onClick={() => setSelected((s) => !s)}
                            color={selected ? "primary" : "default"}
                            variant={selected ? "default" : "outlined"}/>
                        </Stack>
                        
                        <div className="flex mb-2">
                            <h1 className="font-light">Исключить</h1>    
                        </div> 

                        <Select
                            isMulti
                            isClearable
                            closeMenuOnSelect={false}
                            options={options[0]}
                            components={animatedComponents}
                            value={value}
                            placeholder='Типы'
                            noOptionsMessage={() => "Типы закончились"}
                            styles={customStyles}
                            className="my-react-select-container mb-2"
                            classNamePrefix="my-react-select"
                            />
                        
                        <Select
                            isMulti
                            isClearable
                            closeMenuOnSelect={false}
                            options={options[1]}
                            components={animatedComponents}
                            value={value}
                            placeholder='Жанры'
                            noOptionsMessage={() => "Жанры закончились"}
                            styles={customStyles}
                            className="my-react-select-container mb-2"
                            classNamePrefix="my-react-select"
                            />
                    </div>
                </div>
            </div>
        </div>
    );
}