import { useState } from "react";
import Layout from "./Layout";

const messages = [
  "I don't know whether it is the right time to say or not pandu, I'm just confessing",
  "Manam travel chesindhi konni months adhi yeppudo 6 years back naku nuvvu yela untavo telidhu niku em istamo telidhu ni behaviour telidhu pedhaga connect ayyindhi kuda ledhu matladina konchem time lo kuda",
  "But I don't know why this much I'm loving you, more than love I'm addicted to you ela antey gudiki velledhi thakkuva vellina kuda chinnapudu settle avvali korukune vaadini",
  "once nvu vachina trvta I started praying for pandu ela antey ninnu pelli chesukuni settle avvali ani",
  "I know I have made a mistake akka ki propose chesa but at the age I don't know aa phase lo naku unnadhi akka matrame aa age lo antha maturity ledhu so ala anipinchindhi ",
  "i really love her as friend manam okaltho matladithe bond create ayithadhi kadha adhe love anukunna aa age lo but it's wrong",
  "I once proposed to your sister, later realized my mistake, and truly regretted it—but no one believed me, and it felt like I betrayed your trust.",
  "You may question what guarantee I have that I won’t repeat it; honestly, I don’t have an answer. But in all these years I haven’t spoken to her and won’t again—I’ve lost interest in everything, maybe because of you.",
  "You know I have said that nenu aa time lo nduku ala chesano nik gurthu undho ledho naku telidhu chepthunna mi akka ki ala propose CHESI later realise ayyi cheppina yevaru nammaru ninnu mosam chesinattu undhi i felt very regret at that moment ni vishyam lo",
  "I don't know why I'm addicted to you like this ninnu thalachukoni roju antu undadhu like ni peru oka japam laaga ayipoyindhi",
  "Nenu ivi anni ippudu neeku chepthundhi nuvvu natho matladuthunnav ani kaadhu naku cheppey time yeppudu raaledhu trvta vasthundho ledho naku telidhu",  
  "Settle ayina trvta chepdham anukunna ivi anni but naku aa chance rakapovachu nvu relation lo undochu maybe pelli ayipovachu ",
  "Neeku yelanti distractions undakudani time idhi ilanti time lo ivi anni cheppi disturb chesthunna ani telusu inka cheyyanu sorry for everything what I have did",
  "Ippatiki 7 years avuthundhi Feb 12th 2020 but the same feelings I have on you I don't know why nuvvu natho untey bagundidho ledho naku telidhu but kavali anipisthundhi either it's good or bad for me",
  "Moreover naku nitho paatu intlo responsibilities kuda unnayi nuvvu natho unna lekunna naku ni meedha unnadhi love oo addiction inkoto naku telidhu adhi ayithe yeppatiki ilane untadhi",
  "Nenu kuda settle avvali intlo vaalani chuskovali ni meedha malli feelings pettukuni nenu yedho badha padatha unta anukoku",
  "Naku ni meedha feeling nik na meedha rakapovachu i totally understand ika mundhu rakapoyina I'm ok with it.",
  "Naku ni meedha vunna prema thappa em ledhu ippudu niku chepthaki trvta anni undi chepthaki nuvvu untavo ledho andhuke chepthunna ivi anni",
  "Chinnapudu chesina promise meedhe nilapadatha naku nuvvu thappa yevaru odhu I will be like this only.",
  "settle ayyi intlo vaalani baaga chuskunta nuvvu untey ok lekapothe I will be like this just praying for you to be good.",
  "Nuvvu happy ga manchiga undali Anukunta yevaritho unna",
  "Direct ga cheppey dhairyam leka ila chepthunna sorry if I'm disturbing you.",
  "My feelings on you will be the same till my death this time I'm not gonna break my promise",
  "Last ga I love you pandu always missing you."
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
