import React, { useState, useEffect } from "react";
import "./css/MioLoading.less";
import gxr from "./MyLove/gxr";

const dot = ".";
const storys = [
  "面对歹徒手中的水果刀, 王警官从容不迫掏出了水果",
  "面对歹徒的挑衅, 经验丰富的王警官忍无可忍, 再也抑制不住内心的怒火, 无法冷静, 头脑一热, 发起了高烧 ",
  "“大师，帮我算一卦”,  “你会死的很难看。”, “怎么破？”, “先整容再死。”"
];

const MioLoding = MioProps => {
  const [dotNum, setDotNum] = useState(1);
  const [storyRow, setStoryRow] = useState(-1);
  const [tipLeft, setTipLeft] = useState("50%");
  const [tipBottom, setTipBottom] = useState("50%");
  const [tipFontSize, setTipFontSize] = useState(25);
  const [story, setStory] = useState(gxr.rdGetOneArr(storys));

  let loadTipTm;
  let dotIt;
  let storyInt;
  useEffect(() => {
    dotInit();
    return () => {
      clearInterval(dotIt);
      clearTimeout(loadTipTm);
    };
  }, []);
  useEffect(() => {
    if (storyRow != -1) storyInit();
    return () => {
      clearInterval(storyInt);
    };
  }, [storyRow]);
  const dotInit = () => {
    let n = dotNum;
    dotIt = setInterval(() => {
      if (n > 3) n = 1;
      setDotNum(n++);
    }, 500);
    loadTipTm = setTimeout(() => {
      tipMove();
      setStoryRow(0);
    }, 3000);
  };
  const tipMove = () => {
    setTipLeft("100px");
    setTipBottom("30px");
    setTipFontSize(20);
  };
  const storyInit = () => {
    storyInt = setInterval(() => {
      let maxRow = story.split(",").length;
      if (storyRow > maxRow) {
        setStoryRow(0);
        setStory(gxr.rdGetOneArr(storys));
      } else {
        setStoryRow(storyRow + 1);
      }
    }, 2000);
  };
  const getTip = () => (
    <div
      className='tip'
      style={{
        bottom: tipBottom,
        left: tipLeft,
        fontSize: tipFontSize
      }}>
      拼命加载中{dot.repeat(dotNum)}
    </div>
  );
  const getStory = () => (
    <div className='story'>
      <div className='storyMove' style={{ transform: `translateY(${-40 * storyRow}px)` }}>
        {story.split(",").map(s => (
          <p key={s}>{s}</p>
        ))}
        <p></p>
      </div>
    </div>
  );
  return (
    <div className='mio-loading'>
      {getTip()}
      {getStory()}
    </div>
  );
};

export default MioLoding;
