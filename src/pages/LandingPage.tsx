import React from 'react';
import styled from "styled-components";
import image from "../assets/images/background.png"
import Card, { CardState } from "../components/Card";
import { Props as CardProps } from '../components/Card';
import "../assets/styles/style.css";
import { paragraphOne, paragraphThree, paragraphTwo } from "../data/data";


const foie_gras: CardProps = {
	paragraph: paragraphOne,
	text: 'Сказачное заморское явство',
	selectedText: 'Котэ не одобряет?',
	title: 'Нямушка',
	subTitle: 'с фуа-гра',
	badgeText: '0,5',
	disabled: false,
	bottomText: { selected: 'Печень утки разварная с артишоками.', disabled: 'Печалька, с фуа-гра закончился.' }
};

const fish: CardProps = {
	paragraph: paragraphTwo,
	text: 'Сказачное заморское явство',
	selectedText: 'Котэ не одобряет?',
	title: 'Нямушка',
	subTitle: 'с рыбой',
	badgeText: '2',
	disabled: false,
	bottomText: { selected: "Головы щучьи с чесноком да свежайшая сёмгушка.", disabled: "Печалька, с рыбой закончился." }

};

const chicken: CardProps = {
	paragraph: paragraphThree,
	text: 'Сказачное заморское явство',
	selectedText: 'Котэ не одобряет?',
	title: 'Нямушка',
	subTitle: 'с курой',
	badgeText: '5',
	disabled: true,
	bottomText: { selected: "Филе из цыплят с трюфелями в бульоне.", disabled: "Печалька, с курой закончился." }
};

function LandingPage() {

	const onSelectCard = (state: CardState) => {
	};

	return (
		<MainComponent>
			<ContentContainer>
				<h1 className={"hello"}>Ты сегодня покормил кота?</h1>
				<CardView>
					<CardContainer>
						<Card key={'CardOne'} {...foie_gras} onClick={onSelectCard} />
					</CardContainer>
					<CardContainer>
						<Card key={'CardTwo'} {...fish} onClick={onSelectCard} />
					</CardContainer>
					<CardContainer>
						<Card key={'CardThree'} {...chicken} onClick={onSelectCard} />
					</CardContainer>
				</CardView>
			</ContentContainer>
		</MainComponent>
	);
}

const MainComponent = styled.div`
	display: flex;
	justify-content: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  color: white;
  background: linear-gradient(to bottom,
    rgba(0,0,0,0.57) 0%,
    rgba(0,0,0,0.12) 45%,
    rgba(0,0,0,0.12) 50%,
    rgba(0,0,0,0.12) 55%,
    rgba(0,0,0,0.57) 100%),
    url(${image});
  background-size: cover;
  overflow: auto;
`;

const ContentContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	overflow-wrap: break-word;
	-ms-word-wrap: break-word;
`;

const CardView = styled.div`
	width: 1400px;
	display: flex;
	padding: 5px;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
  @media (max-width: 1400px) and (max-width: 1100px){ 
  	width: 100%;
  	justify-content: center;
  }
`;

const CardContainer = styled.div`
	padding: 15px;
`;

export default LandingPage;
