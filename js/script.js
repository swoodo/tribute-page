// counters for biography text and film group reveals
var bioTextNum = 0;
var filmNum = 0;

// biography text
var bioText0 = "Hayao Miyazaki (宮崎 駿 Miyazaki Hayao, born January 5, 1941) is a Japanese animator, filmmaker, screenwriter, author, and manga artist. A co-founder of Studio Ghibli, a film and animation studio, he has attained international acclaim as a masterful storyteller and as a maker of animated feature films, and is widely regarded as one of the greatest animation filmmakers of all time." + "<br /> <br />" + "Born in Bunkyō Ward of Tokyo, Miyazaki expressed interest in manga and animation from an early age, and he joined Toei Animation in 1963. During his early years at Toei Animation he worked as an in-between artist and later collaborated with director Isao Takahata. Notable films to which Miyazaki contributed at Toei include Doggie March and Gulliver's Travels Beyond the Moon. He provided key animation to other films at Toei, such as Puss in Boots and Animal Treasure Island, before moving to A-Pro in 1971, where he co-directed Lupin the Third Part I alongside Takahata.";
var bioText1 = "After moving to Zuiyō Eizō (later known as Nippon Animation) in 1973, Miyazaki worked as an animator on World Masterpiece Theater, and directed the television series Future Boy Conan. He joined Telecom Animation Film/Tokyo Movie Shinsha in 1979 to direct his first feature films, The Castle of Cagliostro in 1979 and Nausicaä of the Valley of the Wind in 1984, as well as the television series Sherlock Hound." + "<br /><br />" + "Miyazaki co-founded Studio Ghibli in 1985. He directed numerous films with Ghibli, including Castle in the Sky (1986), My Neighbor Totoro (1988), Kiki's Delivery Service (1989), and Porco Rosso (1992). The films were met with critical and commercial success in Japan. Miyazaki's film Princess Mononoke was the first animated film ever to win the Japan Academy Prize for Picture of the Year, and briefly became the highest-grossing film in Japan following its release in 1997;[a] its distribution to the Western world greatly increased Ghibli's popularity and influence outside Japan.";
var bioText2 = "His 2001 film Spirited Away became the highest-grossing film in Japanese history, winning the Academy Award for Best Animated Feature at the 75th Academy Awards and is frequently ranked among the greatest films of the 2000s. Miyazaki's later films—Howl's Moving Castle (2004), Ponyo (2008), and The Wind Rises (2013)—also enjoyed critical and commercial success. Following the release of The Wind Rises, Miyazaki announced his retirement from feature films, though he returned to work on a new feature film in 2016." + "<br /><br />" + "Miyazaki's works are characterized by the recurrence of themes such as humanity's relationship with nature and technology, the wholesomeness of natural and traditional patterns of living, the importance of art and craftsmanship, and the difficulty of maintaining a pacifist ethic in a violent world. The protagonists of his films are often strong girls or young women, and several of his films present morally ambiguous antagonists with redeeming qualities.";
var bioText3 = " Miyazaki's works have been highly praised and awarded; he was named a Person of Cultural Merit for outstanding cultural contributions in November 2012, and received the Academy Honorary Award for his impact on animation and cinema in November 2014. In 2002, American film critic Roger Ebert suggested that Miyazaki may be the best animation filmmaker in history, praising the depth and artistry of his films.[2] Miyazaki has frequently been cited as an inspiration for numerous animators, directors, and writers." + "<br /><br /><a href='https://en.wikipedia.org/wiki/Hayao_Miyazaki' target='_blank' class='biography-learn-more-btn'>Learn More</a>"; 

// show initial biography text, grey out prev text button
document.getElementById("tribute-info").innerHTML = bioText0;
document.getElementById("biography-text-prev").style.opacity = 0.3;

// next biography text button
function nextBioText() {
	if (bioTextNum < 3) {
		bioTextNum++;
	}
	if (bioTextNum == 0) {
		document.getElementById("tribute-info").innerHTML = bioText0;

	} 
	else if (bioTextNum == 1) {
		document.getElementById("tribute-info").innerHTML = bioText1;
		document.getElementById("biography-text-prev").style.opacity = 1;
		document.getElementById("biography-text-prev").classList.remove('noclick');
	} 
	else if (bioTextNum == 2) {
		document.getElementById("tribute-info").innerHTML = bioText2;
	} 
	else if (bioTextNum == 3) {
		document.getElementById("tribute-info").innerHTML = bioText3;
		document.getElementById("biography-text-next").style.opacity = 0.3;
		document.getElementById("biography-text-next").classList.add('noclick');
	}
}

// previous biography text button
function prevBioText() {
	if (bioTextNum > 0) {
		bioTextNum--;
	}

	if (bioTextNum == 0) {
		document.getElementById("tribute-info").innerHTML = bioText0;
		document.getElementById("biography-text-prev").style.opacity = 0.3;
		document.getElementById("biography-text-prev").classList.add('noclick');
	} 
	else if (bioTextNum == 1) {
		document.getElementById("tribute-info").innerHTML = bioText1;
	} 
	else if (bioTextNum == 2) {
		document.getElementById("tribute-info").innerHTML = bioText2;
		document.getElementById("biography-text-next").style.opacity = 1;
		document.getElementById("biography-text-next").classList.remove('noclick');
	} 
	else if (bioTextNum == 3) {
		document.getElementById("tribute-info").innerHTML = bioText3;
	}
}

// reveal film groups
function filmReveal() {
	filmNum++;

	if (filmNum == 1) {
		var films = document.getElementsByClassName("film-group-2");
		for (var i = 0; i < films.length; i++) {
			films[i].style.display = "block";
		}
		var group2Margin = document.getElementsByClassName("film-list-item");
		for (var i = 4; i <= 7; i++) {
			group2Margin[i].style.margin = "0.6em 0 0 0";
		}
	}
	else if (filmNum == 2) {
		var films = document.getElementsByClassName("film-group-3");
		for (var i = 0; i < films.length; i++) {
			films[i].style.display = "block";
		}

		var group2Margin = document.getElementsByClassName("film-list-item");
		for (var i = 8; i <= 11; i++) {
			group2Margin[i].style.margin = "0.6em 0 0 0";
		}
		document.getElementById("film-more-btn").style.transform= "rotate(180deg)";
		document.getElementById("film-more-btn").style.padding= "0 0 0.5em 0";
	}
	else if (filmNum == 3) {
		var films = document.getElementsByClassName("film-group-3");
		for (var i = 0; i < films.length; i++) {
			films[i].style.display = "none";
		}
		var group2Margin = document.getElementsByClassName("film-list-item");
		for (var i = 8; i <= 11; i++) {
			group2Margin[i].style.margin = "0 0 0 0";
		}
	}
	else if (filmNum == 4) {
		var films = document.getElementsByClassName("film-group-2");
		for (var i = 0; i < films.length; i++) {
			films[i].style.display = "none";
		}
		var group2Margin = document.getElementsByClassName("film-list-item");
		for (var i = 4; i <= 7; i++) {
			group2Margin[i].style.margin = "0 0 0 0";
		}
		document.getElementById("film-more-btn").style.transform= "rotate(-360deg)";
		document.getElementById("film-more-btn").style.padding= "0.5em 0 0 0";
		filmNum = 0;
	}
}
