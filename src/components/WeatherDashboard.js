import { saveToLocalStorageByName } from ".././services/services";
import Canvas from "./OffCanvasModule";
import { useState, useEffect } from "react";
import { Row, Col, Container} from "react-bootstrap";
import Heart from "../assets/Heart.png";
import TodayWeatherComponent from "./TodayWeatherComponent";
import FiveDayComponent from "./FiveDayComponent";
import FiveDayCards from "./FiveDayCards";
import { CityCall, ZipStateFinderCall, TodaysWeatherApiCall, WeekWeatherApiCall } from "./FetchComponent";
import DayNightToggle from "./ToggleComponent.js";
import MovingWeatherComponent from './MovingWeatherComponent';



export default function WeatherDashboard() {
    const [city, setCity] = useState('Stockton');
    const [cityDisplay, setcityDisplay] = useState('Stockton');
    const [weatherData, setWeatherData] = useState('Stockton');
    const [weatherState, setWeatherState] = useState('');
    const [todayWeatherData, setTodayWeatherData] = useState('');
    const [weekWeatherData, setWeekWeatherData] = useState('');
    const [test, setTest] = useState('');
    const [testLow, setTestLow] = useState('');
    const [testCurrent, setTestCurrent] = useState('');

    const [todaySunrise, setTodaySunrise] = useState('');
    const [todaySunset, setTodaySunset] = useState('');
    const [todayWindSpeed, setTodayWindSpeed] = useState('');
    const [todayHumidity, setTodayHumidity] = useState('');


    const [dayOneTemp, setDayOneTemp] = useState('');
    const [dayTwoTemp, setDayTwoTemp] = useState('');
    const [dayThreeTemp, setDayThreeTemp] = useState('');
    const [dayFourTemp, setDayFourTemp] = useState('');
    const [dayFiveTemp, setDayFiveTemp] = useState('');

    const [dayOneTempLow, setDayOneTempLow] = useState('');
    const [dayTwoTempLow, setDayTwoTempLow] = useState('');
    const [dayThreeTempLow, setDayThreeTempLow] = useState('');
    const [dayFourTempLow, setDayFourTempLow] = useState('');
    const [dayFiveTempLow, setDayFiveTempLow] = useState('');

    const [todayWeatherIcon, setTodayWeatherIcon] = useState('');
    const [todayCondition, setTodayCondition] = useState('');
    const [dayOneConditions, setDayOneConditions] = useState('');
    const [dayTwoConditions, setDayTwoConditions] = useState('');
    const [dayThreeConditions, setDayThreeConditions] = useState('');
    const [dayFourConditions, setDayFourConditions] = useState('');
    const [dayFiveConditions, setDayFiveConditions] = useState('');

    const [dayOneIcon, setDayOneIcon] = useState('');
    const [dayTwoIcon, setDayTwoIcon] = useState('');
    const [dayThreeIcon, setDayThreeIcon] = useState('');
    const [dayFourIcon, setDayFourIcon] = useState('');
    const [dayFiveIcon, setDayFiveIcon] = useState('');
    const [dayOne, setDayOne] = useState('');

    const [dayTwo, setDayTwo] = useState('');
    const [dayThree, setDayThree] = useState('');
    const [dayFour, setDayFour] = useState('');
    const [dayFive, setDayFive] = useState('');
    const [dayofWeek1, setDayofWeek1] = useState('');
    const [dayofWeek2, setDayofWeek2] = useState('');
    const [dayofWeek3, setDayofWeek3] = useState('');
    const [dayofWeek4, setDayofWeek4] = useState('');
    const [dayofWeek5, setDayofWeek5] = useState('');

    //------------vDark Modev------------------
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };
    //------------^Dark Mode^------------------


    //----------------vOn Loadv------------------------------
    useEffect(() => {
        (async () => {
            setCity('Stockton')
            const cityData = await CityCall(city);
            const todayData = await TodaysWeatherApiCall(city);
            const Weekdata = await WeekWeatherApiCall(city);

            const sunriseTime = new Date(todayData.sys.sunrise * 1000).toLocaleTimeString();
            const sunsetTime = new Date(todayData.sys.sunset * 1000).toLocaleTimeString();

            setcityDisplay(city)
            setTodaySunset(" Sunset: " + sunsetTime + ", ");
            setTodaySunrise(" Sunrise: " + sunriseTime + ", ");
            setTodayWindSpeed(" Current Wind Speed: " + todayData.wind.speed + "MPH ");
            setTodayHumidity(" Humidity: " + todayData.main.humidity + "%, ");
            setWeatherState(cityData[0].state)

            setTodayCondition(todayData.weather[0].main);
            setTest(Math.round(todayData.main.temp_max));
            setTestLow(Math.round(todayData.main.temp_min));
            setTestCurrent(Math.round(todayData.main.temp));

            setDayOneTemp(Math.round(Math.max(Weekdata.list[1].main.temp_max, Weekdata.list[2].main.temp_max, Weekdata.list[3].main.temp_max, Weekdata.list[4].main.temp_max, Weekdata.list[5].main.temp_max, Weekdata.list[6].main.temp_max,Weekdata.list[7].main.temp_max, Weekdata.list[8].main.temp_max )) + "°F");
            setDayTwoTemp(Math.round(Math.max(Weekdata.list[16].main.temp_max, Weekdata.list[9].main.temp_max, Weekdata.list[10].main.temp_max, Weekdata.list[11].main.temp_max, Weekdata.list[12].main.temp_max, Weekdata.list[13].main.temp_max,Weekdata.list[14].main.temp_max, Weekdata.list[15].main.temp_max )) + "°F");
            setDayThreeTemp(Math.round(Math.max(Weekdata.list[17].main.temp_max, Weekdata.list[18].main.temp_max, Weekdata.list[19].main.temp_max, Weekdata.list[20].main.temp_max, Weekdata.list[21].main.temp_max, Weekdata.list[22].main.temp_max,Weekdata.list[23].main.temp_max, Weekdata.list[24].main.temp_max )) + "°F");
            setDayFourTemp(Math.round(Math.max(Weekdata.list[25].main.temp_max, Weekdata.list[26].main.temp_max, Weekdata.list[27].main.temp_max, Weekdata.list[28].main.temp_max, Weekdata.list[29].main.temp_max, Weekdata.list[30].main.temp_max,Weekdata.list[31].main.temp_max, Weekdata.list[32].main.temp_max )) + "°F");
            setDayFiveTemp(Math.round(Math.max(Weekdata.list[32].main.temp_max, Weekdata.list[33].main.temp_max, Weekdata.list[34].main.temp_max, Weekdata.list[35].main.temp_max, Weekdata.list[5].main.temp_max, Weekdata.list[36].main.temp_max,Weekdata.list[37].main.temp_max, Weekdata.list[38].main.temp_max )) + "°F");
            setDayOneTempLow(Math.round(Math.min(Weekdata.list[1].main.temp_min, Weekdata.list[2].main.temp_min, Weekdata.list[3].main.temp_min, Weekdata.list[4].main.temp_min, Weekdata.list[5].main.temp_min, Weekdata.list[6].main.temp_min,Weekdata.list[7].main.temp_min, Weekdata.list[8].main.temp_min )) + "°F");
            setDayTwoTempLow(Math.round(Math.min(Weekdata.list[9].main.temp_min, Weekdata.list[10].main.temp_min, Weekdata.list[11].main.temp_min, Weekdata.list[12].main.temp_min, Weekdata.list[13].main.temp_min, Weekdata.list[14].main.temp_min,Weekdata.list[15].main.temp_min, Weekdata.list[16].main.temp_min )) + "°F");
            setDayThreeTempLow(Math.round(Math.min(Weekdata.list[16].main.temp_min, Weekdata.list[17].main.temp_min, Weekdata.list[18].main.temp_min, Weekdata.list[19].main.temp_min, Weekdata.list[20].main.temp_min, Weekdata.list[21].main.temp_min,Weekdata.list[22].main.temp_min, Weekdata.list[23].main.temp_min )) + "°F");
            setDayFourTempLow(Math.round(Math.min(Weekdata.list[24].main.temp_min, Weekdata.list[25].main.temp_min, Weekdata.list[26].main.temp_min, Weekdata.list[27].main.temp_min, Weekdata.list[28].main.temp_min, Weekdata.list[29].main.temp_min,Weekdata.list[30].main.temp_min, Weekdata.list[31].main.temp_min )) + "°F");
            setDayFiveTempLow(Math.round(Math.min(Weekdata.list[32].main.temp_min, Weekdata.list[33].main.temp_min, Weekdata.list[34].main.temp_min, Weekdata.list[35].main.temp_min, Weekdata.list[36].main.temp_min, Weekdata.list[37].main.temp_min,Weekdata.list[38].main.temp_min, Weekdata.list[39].main.temp_min )) + "°F");
            
            setDayOneConditions(Weekdata.list[8].weather[0].main);
            setDayTwoConditions(Weekdata.list[16].weather[0].main);
            setDayThreeConditions(Weekdata.list[24].weather[0].main);
            setDayFourConditions(Weekdata.list[32].weather[0].main);
            setDayFiveConditions(Weekdata.list[39].weather[0].main);

            // ------------------  Icon Picture  ----------------------

            setTodayWeatherIcon(`https://openweathermap.org/img/wn/${todayData.weather[0].icon}@4x.png`)
            setDayOneIcon(`https://openweathermap.org/img/wn/${Weekdata.list[8].weather[0].icon}@4x.png`);
            setDayTwoIcon(`https://openweathermap.org/img/wn/${Weekdata.list[16].weather[0].icon}@4x.png`);
            setDayThreeIcon(`https://openweathermap.org/img/wn/${Weekdata.list[24].weather[0].icon}@4x.png`);
            setDayFourIcon(`https://openweathermap.org/img/wn/${Weekdata.list[32].weather[0].icon}@4x.png`);
            setDayFiveIcon(`https://openweathermap.org/img/wn/${Weekdata.list[39].weather[0].icon}@4x.png`);

            //---------------Date Example *12/12/23* --------------------

            let weekDate1 = Weekdata.list[8].dt_txt.toString();
            weekDate1 = weekDate1.slice(0, 10);
            let date1 = new Date(weekDate1);
            let newDate1 = date1.toLocaleDateString();
            setDayOne(newDate1);

            let weekDate2 = Weekdata.list[16].dt_txt.toString();
            weekDate2 = weekDate2.slice(0, 10);
            let date2 = new Date(weekDate2);
            let newDate2 = date2.toLocaleDateString();
            setDayTwo(newDate2);

            let weekDate3 = Weekdata.list[24].dt_txt.toString();
            weekDate3 = weekDate3.slice(0, 10);
            let date3 = new Date(weekDate3);
            let newDate3 = date3.toLocaleDateString();
            setDayThree(newDate3);

            let weekDate4 = Weekdata.list[32].dt_txt.toString();
            weekDate4 = weekDate4.slice(0, 10);
            let date4 = new Date(weekDate4);
            let newDate4 = date4.toLocaleDateString();
            setDayFour(newDate4);

            let weekDate5 = Weekdata.list[39].dt_txt.toString();
            weekDate5 = weekDate5.slice(0, 10);
            let date5 = new Date(weekDate5);
            let newDate5 = date5.toLocaleDateString();
            setDayFive(newDate5);

            //------------------Date *Monday ~ Sunday*-------------------

            let day1 = new Date(Weekdata.list[8].dt_txt);
            let options = { weekday: "long" };
            let weekday1 = new Intl.DateTimeFormat("en-US", options).format(day1);
            setDayofWeek1(weekday1);

            let day2 = new Date(Weekdata.list[16].dt_txt);
            let weekDay2 = new Intl.DateTimeFormat("en-US", options).format(day2);
            setDayofWeek2(weekDay2);

            let day3 = new Date(Weekdata.list[24].dt_txt);
            let weekDay3 = new Intl.DateTimeFormat("en-US", options).format(day3);
            setDayofWeek3(weekDay3);

            let day4 = new Date(Weekdata.list[32].dt_txt);
            let weekDay4 = new Intl.DateTimeFormat("en-US", options).format(day4);
            setDayofWeek4(weekDay4);

            let day5 = new Date(Weekdata.list[39].dt_txt);
            let weekDay5 = new Intl.DateTimeFormat("en-US", options).format(day5);
            setDayofWeek5(weekDay5);

        })();
    }, []);
    //----------------^On Load^------------------------------

    const handleKeyDown = async (e) => {

        if (e.key === "Enter") {
            setCity(e.target.value);

            if (/(\d)+/.test(city)) {
                const data = await ZipStateFinderCall(city);
                const cityData = await CityCall(data);
                const todayData = await TodaysWeatherApiCall(data);
                const Weekdata = await WeekWeatherApiCall(data);

                const sunriseTime = new Date(todayData.sys.sunrise * 1000).toLocaleTimeString();
                const sunsetTime = new Date(todayData.sys.sunset * 1000).toLocaleTimeString();


                setcityDisplay(data)
                setTodaySunset(" Sunset: " + sunsetTime + ", ");
                setTodaySunrise(" Sunrise: " + sunriseTime + ", ");
                setTodayWindSpeed(" Current Wind Speed: " + todayData.wind.speed + "MPH ");
                setTodayHumidity(" Humidity: " + todayData.main.humidity + "%, ");
                setWeekWeatherData(Weekdata);
                setWeatherData(cityData);
                setTodayWeatherData(todayData);
                setWeatherState(cityData[0].state)
                setTodayCondition(todayWeatherData.weather[0].main);
                setTest(Math.round(todayWeatherData.main.temp_max));
                setTestLow(Math.round(todayWeatherData.main.temp_min));
                setTestCurrent(Math.round(todayWeatherData.main.temp));
                setDayOneTemp(Math.round(Math.max(Weekdata.list[1].main.temp_max, Weekdata.list[2].main.temp_max, Weekdata.list[3].main.temp_max, Weekdata.list[4].main.temp_max, Weekdata.list[5].main.temp_max, Weekdata.list[6].main.temp_max,Weekdata.list[7].main.temp_max, Weekdata.list[8].main.temp_max )) + "°F");
                setDayTwoTemp(Math.round(Math.max(Weekdata.list[16].main.temp_max, Weekdata.list[9].main.temp_max, Weekdata.list[10].main.temp_max, Weekdata.list[11].main.temp_max, Weekdata.list[12].main.temp_max, Weekdata.list[13].main.temp_max,Weekdata.list[14].main.temp_max, Weekdata.list[15].main.temp_max )) + "°F");
                setDayThreeTemp(Math.round(Math.max(Weekdata.list[17].main.temp_max, Weekdata.list[18].main.temp_max, Weekdata.list[19].main.temp_max, Weekdata.list[20].main.temp_max, Weekdata.list[21].main.temp_max, Weekdata.list[22].main.temp_max,Weekdata.list[23].main.temp_max, Weekdata.list[24].main.temp_max )) + "°F");
                setDayFourTemp(Math.round(Math.max(Weekdata.list[25].main.temp_max, Weekdata.list[26].main.temp_max, Weekdata.list[27].main.temp_max, Weekdata.list[28].main.temp_max, Weekdata.list[29].main.temp_max, Weekdata.list[30].main.temp_max,Weekdata.list[31].main.temp_max, Weekdata.list[32].main.temp_max )) + "°F");
                setDayFiveTemp(Math.round(Math.max(Weekdata.list[32].main.temp_max, Weekdata.list[33].main.temp_max, Weekdata.list[34].main.temp_max, Weekdata.list[35].main.temp_max, Weekdata.list[5].main.temp_max, Weekdata.list[36].main.temp_max,Weekdata.list[37].main.temp_max, Weekdata.list[38].main.temp_max )) + "°F");
                setDayOneTempLow(Math.round(Math.min(Weekdata.list[1].main.temp_min, Weekdata.list[2].main.temp_min, Weekdata.list[3].main.temp_min, Weekdata.list[4].main.temp_min, Weekdata.list[5].main.temp_min, Weekdata.list[6].main.temp_min,Weekdata.list[7].main.temp_min, Weekdata.list[8].main.temp_min )) + "°F");
                setDayTwoTempLow(Math.round(Math.min(Weekdata.list[9].main.temp_min, Weekdata.list[10].main.temp_min, Weekdata.list[11].main.temp_min, Weekdata.list[12].main.temp_min, Weekdata.list[13].main.temp_min, Weekdata.list[14].main.temp_min,Weekdata.list[15].main.temp_min, Weekdata.list[16].main.temp_min )) + "°F");
                setDayThreeTempLow(Math.round(Math.min(Weekdata.list[16].main.temp_min, Weekdata.list[17].main.temp_min, Weekdata.list[18].main.temp_min, Weekdata.list[19].main.temp_min, Weekdata.list[20].main.temp_min, Weekdata.list[21].main.temp_min,Weekdata.list[22].main.temp_min, Weekdata.list[23].main.temp_min )) + "°F");
                setDayFourTempLow(Math.round(Math.min(Weekdata.list[24].main.temp_min, Weekdata.list[25].main.temp_min, Weekdata.list[26].main.temp_min, Weekdata.list[27].main.temp_min, Weekdata.list[28].main.temp_min, Weekdata.list[29].main.temp_min,Weekdata.list[30].main.temp_min, Weekdata.list[31].main.temp_min )) + "°F");
                setDayFiveTempLow(Math.round(Math.min(Weekdata.list[32].main.temp_min, Weekdata.list[33].main.temp_min, Weekdata.list[34].main.temp_min, Weekdata.list[35].main.temp_min, Weekdata.list[36].main.temp_min, Weekdata.list[37].main.temp_min,Weekdata.list[38].main.temp_min, Weekdata.list[39].main.temp_min )) + "°F");
                setDayOneConditions(Weekdata.list[8].weather[0].main);
                setDayTwoConditions(Weekdata.list[16].weather[0].main);
                setDayThreeConditions(Weekdata.list[24].weather[0].main);
                setDayFourConditions(Weekdata.list[32].weather[0].main);
                setDayFiveConditions(Weekdata.list[39].weather[0].main);

                // ------------------  Icon Picture  ----------------------

                setTodayWeatherIcon(`https://openweathermap.org/img/wn/${todayWeatherData.weather[0].icon}@4x.png`)
                setDayOneIcon(`https://openweathermap.org/img/wn/${weekWeatherData.list[8].weather[0].icon}@4x.png`);
                setDayTwoIcon(`https://openweathermap.org/img/wn/${weekWeatherData.list[16].weather[0].icon}@4x.png`);
                setDayThreeIcon(`https://openweathermap.org/img/wn/${weekWeatherData.list[24].weather[0].icon}@4x.png`);
                setDayFourIcon(`https://openweathermap.org/img/wn/${weekWeatherData.list[32].weather[0].icon}@4x.png`);
                setDayFiveIcon(`https://openweathermap.org/img/wn/${weekWeatherData.list[39].weather[0].icon}@4x.png`);

                //---------------Date Example *12/12/23* --------------------

                let weekDate1 = weekWeatherData.list[8].dt_txt.toString();
                weekDate1 = weekDate1.slice(0, 10);
                let date1 = new Date(weekDate1);
                let newDate1 = date1.toLocaleDateString();
                setDayOne(newDate1);

                let weekDate2 = weekWeatherData.list[16].dt_txt.toString();
                weekDate2 = weekDate2.slice(0, 10);
                let date2 = new Date(weekDate2);
                let newDate2 = date2.toLocaleDateString();
                setDayTwo(newDate2);

                let weekDate3 = weekWeatherData.list[24].dt_txt.toString();
                weekDate3 = weekDate3.slice(0, 10);
                let date3 = new Date(weekDate3);
                let newDate3 = date3.toLocaleDateString();
                setDayThree(newDate3);

                let weekDate4 = weekWeatherData.list[32].dt_txt.toString();
                weekDate4 = weekDate4.slice(0, 10);
                let date4 = new Date(weekDate4);
                let newDate4 = date4.toLocaleDateString();
                setDayFour(newDate4);

                let weekDate5 = weekWeatherData.list[39].dt_txt.toString();
                weekDate5 = weekDate5.slice(0, 10);
                let date5 = new Date(weekDate5);
                let newDate5 = date5.toLocaleDateString();
                setDayFive(newDate5);

                //------------------Date *Monday ~ Sunday*-------------------

                let day1 = new Date(weekWeatherData.list[8].dt_txt);
                let options = { weekday: "long" };
                let weekday1 = new Intl.DateTimeFormat("en-US", options).format(day1);
                setDayofWeek1(weekday1);

                let day2 = new Date(weekWeatherData.list[16].dt_txt);
                let weekDay2 = new Intl.DateTimeFormat("en-US", options).format(day2);
                setDayofWeek2(weekDay2);

                let day3 = new Date(weekWeatherData.list[24].dt_txt);
                let weekDay3 = new Intl.DateTimeFormat("en-US", options).format(day3);
                setDayofWeek3(weekDay3);

                let day4 = new Date(weekWeatherData.list[32].dt_txt);
                let weekDay4 = new Intl.DateTimeFormat("en-US", options).format(day4);
                setDayofWeek4(weekDay4);

                let day5 = new Date(weekWeatherData.list[39].dt_txt);
                let weekDay5 = new Intl.DateTimeFormat("en-US", options).format(day5);
                setDayofWeek5(weekDay5);


            } else {
                const cityData = await CityCall(city);
                const todayData = await TodaysWeatherApiCall(city);
                const Weekdata = await WeekWeatherApiCall(city);

                const sunriseTime = new Date(todayData.sys.sunrise * 1000).toLocaleTimeString();
                const sunsetTime = new Date(todayData.sys.sunset * 1000).toLocaleTimeString();


                setcityDisplay(city)
                setTodaySunset(" Sunset: " + sunsetTime + ", ");
                setTodaySunrise(" Sunrise: " + sunriseTime + ", ");
                setTodayWindSpeed(" Current Wind Speed: " + todayData.wind.speed + "MPH ");
                setTodayHumidity(" Humidity: " + todayData.main.humidity + "%, ");
                setWeekWeatherData(Weekdata);
                setWeatherData(cityData);
                setTodayWeatherData(todayData);
                setWeatherState(cityData[0].state)
                setTodayCondition(todayWeatherData.weather[0].main);
                setTest(Math.round(todayWeatherData.main.temp_max));
                setTestLow(Math.round(todayWeatherData.main.temp_min));
                setTestCurrent(Math.round(todayWeatherData.main.temp));
                setDayOneTemp(Math.round(Math.max(Weekdata.list[1].main.temp_max, Weekdata.list[2].main.temp_max, Weekdata.list[3].main.temp_max, Weekdata.list[4].main.temp_max, Weekdata.list[5].main.temp_max, Weekdata.list[6].main.temp_max,Weekdata.list[7].main.temp_max, Weekdata.list[8].main.temp_max )) + "°F");
                setDayTwoTemp(Math.round(Math.max(Weekdata.list[16].main.temp_max, Weekdata.list[9].main.temp_max, Weekdata.list[10].main.temp_max, Weekdata.list[11].main.temp_max, Weekdata.list[12].main.temp_max, Weekdata.list[13].main.temp_max,Weekdata.list[14].main.temp_max, Weekdata.list[15].main.temp_max )) + "°F");
                setDayThreeTemp(Math.round(Math.max(Weekdata.list[17].main.temp_max, Weekdata.list[18].main.temp_max, Weekdata.list[19].main.temp_max, Weekdata.list[20].main.temp_max, Weekdata.list[21].main.temp_max, Weekdata.list[22].main.temp_max,Weekdata.list[23].main.temp_max, Weekdata.list[24].main.temp_max )) + "°F");
                setDayFourTemp(Math.round(Math.max(Weekdata.list[25].main.temp_max, Weekdata.list[26].main.temp_max, Weekdata.list[27].main.temp_max, Weekdata.list[28].main.temp_max, Weekdata.list[29].main.temp_max, Weekdata.list[30].main.temp_max,Weekdata.list[31].main.temp_max, Weekdata.list[32].main.temp_max )) + "°F");
                setDayFiveTemp(Math.round(Math.max(Weekdata.list[32].main.temp_max, Weekdata.list[33].main.temp_max, Weekdata.list[34].main.temp_max, Weekdata.list[35].main.temp_max, Weekdata.list[5].main.temp_max, Weekdata.list[36].main.temp_max,Weekdata.list[37].main.temp_max, Weekdata.list[38].main.temp_max )) + "°F");
                setDayOneTempLow(Math.round(Math.min(Weekdata.list[1].main.temp_min, Weekdata.list[2].main.temp_min, Weekdata.list[3].main.temp_min, Weekdata.list[4].main.temp_min, Weekdata.list[5].main.temp_min, Weekdata.list[6].main.temp_min,Weekdata.list[7].main.temp_min, Weekdata.list[8].main.temp_min )) + "°F");
                setDayTwoTempLow(Math.round(Math.min(Weekdata.list[9].main.temp_min, Weekdata.list[10].main.temp_min, Weekdata.list[11].main.temp_min, Weekdata.list[12].main.temp_min, Weekdata.list[13].main.temp_min, Weekdata.list[14].main.temp_min,Weekdata.list[15].main.temp_min, Weekdata.list[16].main.temp_min )) + "°F");
                setDayThreeTempLow(Math.round(Math.min(Weekdata.list[16].main.temp_min, Weekdata.list[17].main.temp_min, Weekdata.list[18].main.temp_min, Weekdata.list[19].main.temp_min, Weekdata.list[20].main.temp_min, Weekdata.list[21].main.temp_min,Weekdata.list[22].main.temp_min, Weekdata.list[23].main.temp_min )) + "°F");
                setDayFourTempLow(Math.round(Math.min(Weekdata.list[24].main.temp_min, Weekdata.list[25].main.temp_min, Weekdata.list[26].main.temp_min, Weekdata.list[27].main.temp_min, Weekdata.list[28].main.temp_min, Weekdata.list[29].main.temp_min,Weekdata.list[30].main.temp_min, Weekdata.list[31].main.temp_min )) + "°F");
                setDayFiveTempLow(Math.round(Math.min(Weekdata.list[32].main.temp_min, Weekdata.list[33].main.temp_min, Weekdata.list[34].main.temp_min, Weekdata.list[35].main.temp_min, Weekdata.list[36].main.temp_min, Weekdata.list[37].main.temp_min,Weekdata.list[38].main.temp_min, Weekdata.list[39].main.temp_min )) + "°F");
                setDayOneConditions(Weekdata.list[8].weather[0].main);
                setDayTwoConditions(Weekdata.list[16].weather[0].main);
                setDayThreeConditions(Weekdata.list[24].weather[0].main);
                setDayFourConditions(Weekdata.list[32].weather[0].main);
                setDayFiveConditions(Weekdata.list[39].weather[0].main);

                // ------------------  Icon Picture  ----------------------

                setTodayWeatherIcon(`https://openweathermap.org/img/wn/${todayWeatherData.weather[0].icon}@4x.png`)
                setDayOneIcon(`https://openweathermap.org/img/wn/${weekWeatherData.list[8].weather[0].icon}@4x.png`);
                setDayTwoIcon(`https://openweathermap.org/img/wn/${weekWeatherData.list[16].weather[0].icon}@4x.png`);
                setDayThreeIcon(`https://openweathermap.org/img/wn/${weekWeatherData.list[24].weather[0].icon}@4x.png`);
                setDayFourIcon(`https://openweathermap.org/img/wn/${weekWeatherData.list[32].weather[0].icon}@4x.png`);
                setDayFiveIcon(`https://openweathermap.org/img/wn/${weekWeatherData.list[39].weather[0].icon}@4x.png`);

                //---------------Date Example *12/12/23* --------------------

                let weekDate1 = weekWeatherData.list[8].dt_txt.toString();
                weekDate1 = weekDate1.slice(0, 10);
                let date1 = new Date(weekDate1);
                let newDate1 = date1.toLocaleDateString();
                setDayOne(newDate1);

                let weekDate2 = weekWeatherData.list[16].dt_txt.toString();
                weekDate2 = weekDate2.slice(0, 10);
                let date2 = new Date(weekDate2);
                let newDate2 = date2.toLocaleDateString();
                setDayTwo(newDate2);

                let weekDate3 = weekWeatherData.list[24].dt_txt.toString();
                weekDate3 = weekDate3.slice(0, 10);
                let date3 = new Date(weekDate3);
                let newDate3 = date3.toLocaleDateString();
                setDayThree(newDate3);

                let weekDate4 = weekWeatherData.list[32].dt_txt.toString();
                weekDate4 = weekDate4.slice(0, 10);
                let date4 = new Date(weekDate4);
                let newDate4 = date4.toLocaleDateString();
                setDayFour(newDate4);

                let weekDate5 = weekWeatherData.list[39].dt_txt.toString();
                weekDate5 = weekDate5.slice(0, 10);
                let date5 = new Date(weekDate5);
                let newDate5 = date5.toLocaleDateString();
                setDayFive(newDate5);

                //------------------Date *Monday ~ Sunday*-------------------

                let day1 = new Date(weekWeatherData.list[8].dt_txt);
                let options = { weekday: "long" };
                let weekday1 = new Intl.DateTimeFormat("en-US", options).format(day1);
                setDayofWeek1(weekday1);

                let day2 = new Date(weekWeatherData.list[16].dt_txt);
                let weekDay2 = new Intl.DateTimeFormat("en-US", options).format(day2);
                setDayofWeek2(weekDay2);

                let day3 = new Date(weekWeatherData.list[24].dt_txt);
                let weekDay3 = new Intl.DateTimeFormat("en-US", options).format(day3);
                setDayofWeek3(weekDay3);

                let day4 = new Date(weekWeatherData.list[32].dt_txt);
                let weekDay4 = new Intl.DateTimeFormat("en-US", options).format(day4);
                setDayofWeek4(weekDay4);

                let day5 = new Date(weekWeatherData.list[39].dt_txt);
                let weekDay5 = new Intl.DateTimeFormat("en-US", options).format(day5);
                setDayofWeek5(weekDay5);

            }
        }
    };

    const handleFavorites = () => {
        if (city === "") {
        } else {
            saveToLocalStorageByName(city);
        }
    };
    return (
        <div className={`container-fluid ${isDarkMode ? 'heroIMGNight' : 'heroIMG'}`}>
            <Row>
                <Col className="d-flex justify-content-center"><MovingWeatherComponent
            Sunrise={todaySunrise}
            Sunset={todaySunset}
            Humidity={todayHumidity}
            Wind={todayWindSpeed}
            /></Col>
            </Row>
            
            <Row>
                <Col md={12} className="d-flex justify-content-end">
                <DayNightToggle toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />

                </Col>
            </Row>
            <br />
            <Row>
                <Col lg={3} className="headerText">
                    <h1>IKF Weather Report</h1>
                </Col>
                <Col lg={6} className="d-flex align-items-center">
                    <div className="input-group mb-3">
                        <input
                        isDarkMode={isDarkMode}
                            type="text"
                            className="form-control"
                            placeholder="City/State or Zip code"
                            value={city}
                            onKeyDown={handleKeyDown}
                            onChange={(e) => {setCity(e.target.value); }}
                        />
                        <button className="btn" type="submit" onClick={handleFavorites}>
                            <img style={{ height: 20 }} src={Heart} />
                        </button>
                        <Canvas />
                    </div>
                </Col>
            </Row>
            
            <br />
            <TodayWeatherComponent
                currentTemp={'Current Temp: '+ testCurrent + "°F"}
                isDarkMode={isDarkMode}
                city={cityDisplay}
                TodayTemp={test + "°F"}
                TodayTempLow={testLow + "°F"}
                currentCondition={todayCondition}
                CurrentDayImage={todayWeatherIcon} />
            <br />
            <FiveDayComponent isDarkMode={isDarkMode} weekforecast={"5 Day forcast for " + cityDisplay + ", " + weatherState} />

            <Container>
                <Row className="d-flex justify-content-between">
                    <FiveDayCards
                        isDarkMode={isDarkMode}
                        Day={dayofWeek1}
                        Tempeture={dayOneTemp}
                        TempetureLow={dayOneTempLow}
                        WeatherImg={dayOneIcon}
                        Conditions={dayOneConditions}
                        Date={dayOne}
                    />
                    <FiveDayCards
                        isDarkMode={isDarkMode}
                        Day={dayofWeek2}
                        Tempeture={dayTwoTemp}
                        TempetureLow={dayTwoTempLow}
                        WeatherImg={dayTwoIcon}
                        Conditions={dayTwoConditions}
                        Date={dayTwo}
                    />
                    <FiveDayCards
                        isDarkMode={isDarkMode}
                        Day={dayofWeek3}
                        Tempeture={dayThreeTemp}
                        TempetureLow={dayThreeTempLow}
                        WeatherImg={dayThreeIcon}
                        Conditions={dayThreeConditions}
                        Date={dayThree}
                    />
                    <FiveDayCards
                        isDarkMode={isDarkMode}
                        Day={dayofWeek4}
                        Tempeture={dayFourTemp}
                        TempetureLow={dayFourTempLow}
                        WeatherImg={dayFourIcon}
                        Conditions={dayFourConditions}
                        Date={dayFour}
                    />
                    <FiveDayCards
                        isDarkMode={isDarkMode}
                        Day={dayofWeek5}
                        Tempeture={dayFiveTemp}
                        TempetureLow={dayFiveTempLow}
                        WeatherImg={dayFiveIcon}
                        Conditions={dayFiveConditions}
                        Date={dayFive}
                    />
                </Row>
            </Container>
        </div>
    );
}