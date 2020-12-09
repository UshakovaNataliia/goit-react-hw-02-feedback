import React, {useEffect, useState} from "react";
import { connect } from "react-redux";
import { switchEn, switchRu, getLangEn, getLangRu } from "../../redux/selectLang/actionSelectLang";
import langMap from '../../data/langMap.json';

const SelectLang = (props) => {
  const { switchEn, switchRu, getLangEn, getLangRu, lang } = props;


  const handlerLang = e => {

      const {value} = e.target;
      if(value === "en") return switchEn();
      if(value === "ru") return switchRu();
  }

  useEffect(() => {
      console.log("CDM");
  }, [])

  useEffect(() => {
      if(lang === 'en') {
          getLangEn(langMap.en)
      }
      if(lang === "ru") {
          getLangRu(langMap.ru)
      }

}, [lang])

  return (
    <select name="select-lang" id="select-lang" onChange={handlerLang}>
      <option onSelect={switchEn} value="en">En</option>
      <option onSelect={switchRu} value="ru">Ru</option>
    </select>
  );
};

const mapDispatchToProps = {
  switchEn,
  switchRu,
  getLangEn,
  getLangRu
};

const mapStateToPRops = state => ({
    lang: state.selectLang.toggle
})

export default connect(mapStateToPRops, mapDispatchToProps)(SelectLang);
