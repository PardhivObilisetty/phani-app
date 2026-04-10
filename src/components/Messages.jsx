import { useState } from "react";
import Layout from "./Layout";

const messages = [
  "I don't know whether it is the right time to say or not pandu, I'm just confessing",
  "Manam travel chesindhi konni months adhi yeppudo 6 years back naku nuvvu yela untavo telidhu niku em istamo telidhu ni behaviour telidhu pedhaga connect ayyindhi kuda ledhu matladina konchem time lo kuda",
  "But I don't know why this much I'm loving you, more than love I'm addicted to you ela antey gudiki velledhi thakkuva vellina kuda chinnapudu settle avvali korukune vaadini",
  "once nvu vachina trvta I started praying for pandu ela antey ninnu pelli chesukuni settle avvali ani",
  "I know I have made a mistake akka ki propose chesa but at the age I don't know aa phase lo naku unnadhi akka matrame aa age lo antha maturity ledhu so ala anipinchindhi ",
  "i really love her as friend manam okaltho matladithe bond create ayithadhi kadha adhe love anukunna aa age lo but it's wrong",
  "You know I have said that nenu aa time lo nduku ala chesano nik gurthu undho ledho naku telidhu chepthunna mi akka ki ala propose chesi later realise ayyi cheppina yevaru nammaru ninnu mosam chesinattu undhi i felt very regret at that moment ni vishyam lo",
  "I don't know why I'm addicted to you like this ninnu thalachukoni roju antu undadhu like ni peru oka japam laaga ayipoyindhi",
  "Nenu ivi anni ippudu neeku chepthundhi nuvvu natho matladuthunnav ani kaadhu naku cheppey time yeppudu raaledhu trvta vasthundho ledho naku telidhu",  
  "Settle ayina trvta chepdham anukunna ivi anni but naku aa chance rakapovachu nvu relation lo undochu maybe pelli ayipovachu ",
  "Neeku yelanti distractions undakudani time idhi ilanti time lo ivi anni cheppi disturb chesthunna ani telusu inka cheyyanu sorry for everything what I have did",
  "Ippatiki 7 years avuthundhi Feb 12th 2020 but the same feelings I have on you I don't know why nuvvu natho untey bagundidho ledho naku telidhu but kavali anipisthundhi either it's good or bad for me",
  "Naku love antey teliyani age lo love chesa but I don't know why I am stuck at you and you are the biggest impact in my life ninnu love chesa kabatte naku anni telisi vachayi responsibilities anni phases telisi vachayi thank you niku telso telika you helped and hitted me into reality",
  "Goda uriki cake pedtham ni birthday ki flyover meedha cycle vesukuni thiragadam ninnu chusthaki 10th class lo balcony loki vachi kurchovadam mi class dhaggara amma health bagonapudu fruits chesthe nvem theesukuni raavalsina avasaram ledhu ani thechi ivvadam kopam lo",
  "starting lo calls matladukune vaalam last lo cut chesey appudu nenu love you antam nvu bye antam malli nen cheppatam nvu bye antam Nvu just infactuation annapudu aa time lo nenu yedustha pic pettadam Cringest ga unna nakantu nitho pedhaga em memories lev unnavi ive ee memories chaalu pandu",
  "Nen yedustham chusi yedichava ani adigavu monna intiki vachinappudu avnu antey, ala ayithe roju natho kurchuni yedavali annav, antha kanna Inkem kavali pandu nitho untam kante",
  "Naku love antey teliyani age lo love chesa but I don't know why I am stuck at you and you are the biggest impact in my life ninnu love chesa kabatte naku anni telisi vachayi responsibilities anni phases telisi vachayi thank you niku telso telika you helped and hitted me into reality",
  "Nvu natho matladalsina avasaram ledhu kalavalsina avasaram ledhu ni pics kuda avasaram ledhu when I feel you just your name is enough for me to love you",
  "Inka chaala cheppalani ani anukunna but konni emotions feelings feel avuthame thappithe express cheyyalemu",
  "Moreover naku nitho paatu intlo responsibilities kuda unnayi nuvvu natho unna lekunna naku ni meedha unnadhi love oo addiction inkoto naku telidhu adhi ayithe yeppatiki ilane untadhi",
  "Nenu kuda settle avvali intlo vaalani chuskovali ni meedha malli feelings pettukuni nenu yedho badha padatha unta anukoku",
  "Naku ni meedha feeling nik na meedha rakapovachu i totally understand ika mundhu rakapoyina I'm ok with it.",
  "Naku ni meedha prema thappa em ledhu ippudu niku chepthaki trvta anni undi chepthaki nuvvu untavo ledho andhuke chepthunna ivi anni",
  "Chinnapudu chesina promise meedhe nilapadatha naku nuvvu thappa yevaru odhu I will be like this only.",
  "settle ayyi intlo vaalani baaga chuskunta nuvvu untey ok lekapothe I will be like this just praying for you to be good.",
  "Nuvvu happy ga manchiga undali Anukunta yevaritho unna",
  "Direct ga cheppey dhairyam leka ila chepthunna sorry if I'm disturbing you.",
  "My feelings on you will be the same till my death this time I'm not gonna break my promise Last ga, I love you pandu always missing you.",
  "Proudly you can say that there is one person on this earth who loves me unconditionally no matter what it is..."
];

function Messages({ next }) {

  const [index, setIndex] = useState(0);

  const handleTap = () => {

    if(index < messages.length-1){
      setIndex(index+1);
    }else{
      next();
    }
  };

  return (
    <Layout>

      <h1 className="title">
        {messages[index]}
      </h1>

      <p style={{opacity:.6}}>
        tap to continue
      </p>

      <button onClick={handleTap} style={{marginTop:"25px"}}>
        Next
      </button>

    </Layout>
  );
}

export default Messages;
