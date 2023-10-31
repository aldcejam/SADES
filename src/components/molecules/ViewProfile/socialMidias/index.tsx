"use client"
import { useState } from 'react';
import styled from './styled.module.scss';
import { AiOutlineTwitter, AiFillInstagram,AiFillMail,AiOutlineMail,AiOutlineCopy } from 'react-icons/ai';

type SocialMidiasProps = {
  instagram: string;
  twitter: string;
  academicEmail: string;
  personalcEmail: string;
};


const SocialMidias = ({ instagram, twitter,academicEmail,personalcEmail }: SocialMidiasProps) => {
  
  const [midiaCopied, setMidiaCopied] = useState("");

  function copyToClipboard(text:string) {
    navigator.clipboard.writeText(text)
      .then(() => {
        setMidiaCopied(text);
        setTimeout(() => {
          setMidiaCopied("");
        }, 500); 
      })
      .catch((error) => {
        console.error('Erro ao copiar o texto');
      });
  }

  const itens = [
    {midia: twitter, icon: <AiOutlineTwitter/>, link: `https://twitter.com/${twitter}`},
    {midia:instagram, icon: <AiFillInstagram/>, link: `https://www.instagram.com/${instagram}`},
    {midia: academicEmail, icon: <AiOutlineMail/>, link: `mailto:${academicEmail}`},
    {midia: personalcEmail, icon: <AiFillMail/>, link: `mailto:${personalcEmail}`}]
 
  return (
    <div className={styled['social-midias']}>
      <ul>
        {
          itens.map((socialMidia) => {
            return (
              <li key={socialMidia.midia}>
                <a target='_blank' href={socialMidia.link}>
                  {socialMidia.icon}
                </a>
                <div 
                  onClick={() => copyToClipboard(socialMidia.midia)} 
                  className={styled['show-more']}
                  data-copied={midiaCopied == socialMidia.midia}
                  >
                  <AiOutlineCopy/>
                  <p>{socialMidia.midia}</p>
                </div>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
};

export default SocialMidias;
