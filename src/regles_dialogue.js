// Commentaire sur age_min
const randos = require('./randonneurs');
const rando = require('./randonneur');

//const ay = require('./appel_yseop')

exports.comProfil = function(profil) {
	var com = 'Vous avez choisi le profil ' + profil.toString() + '.';
	if (profil == 'A'){
		com += '\n Je me présente, je suis l\'assistant de recommandation P-Val Montagne. Mon travail est de vous faire découvrir le trek de vos rêves.\n J\'aimerais apprendre à mieux vous connaitre, comment vous appelez-vous ?';		
	} else if (profil == 'C'){
		com += '\n Bonjour Jacqueline ! \n Ravi que vous et votre mari Robert soyez de nouveau d’attaque pour partir à l’aventure ! \n Comment qualifieriez-vous le niveau physique moyen de votre couple ?';
	} else if (profil == 'B'){
		com += '\n Bonjour Michel, ravi de vous revoir ! Votre petite Marie doit avoir 6 ans maintenant, les enfants de cet âge adorent gambader dans la montagne :)';		
	} else if (profil == 'D'){
		com += '\n Salut Tom ! \n Heureux de savoir que vous voulez repartir à l’aventure avec Marc, Jeanne, Paul et Marine. Je vais tout faire pour que votre aventure vous convienne autant que la précédente. ;) ';		
	};
	var reply = {type : 'text', content : com};
	return reply;
};

exports.comPrenom = function(prenom){
	var com = 'Enchanté ' + prenom + ', je suis toujours heureux de rencontrer de nouveaux passionnés de randonnée.';
	com += '\n Quel âge avez-vous ?';
	var reply = {type : 'text', content : com};
	return reply;
};

exports.comAge = function(age){
	var com;
	var alt = 0;
	var nvMax = 4;
	// Définition des seuils
	var seuil_1 = 2;
	var seuil_2 = 10;
	var seuil_3 = 80;
	var seuil_4 = 70;
	
	if (age < seuil_1){
		alt = 1500;
		nvMax = 2
		com = age.toString() + ' ans ! Je vous félicite de faire découvrir la montagne à un enfant aussi jeune. Pour votre santé, je ne pourrai vous conseiller que des sites d\'altitude inférieure à 1500m.'
	} else if (age < seuil_2){
		alt = 3000;
		nvMax = 3
		com = age.toString() + ' ans ! Je vous félicite de faire découvrir la montagne à un enfant aussi jeune. Pour votre santé, je ne pourrai vous conseiller que des sites d\'altitude inférieure à 3000m.'
	} else if (age > seuil_3){
		alt = 1500;
		nvMax = 2
		com = 'A ' + age.toString() + ' ans, l\'air de la montagne vous fera le plus grand bien. Pour votre santé, je ne pourrai vous conseiller que des sites d\'altitude inférieure à 1500m.'
	} else if (age > seuil_4){
		alt = 3000;
		nvMax = 3
		com = 'A ' + age.toString() + ' ans, l\'air de la montagne vous fera le plus grand bien. Pour votre santé, je ne pourrai vous conseiller que des sites d\'altitude inférieure à 3000m.'
	} else {
		com = age.toString() + ' ans est l\'âge idéal pour la marche en montagne.'
	};
	randos.setNvMax(nvMax);
	com += ' \n Comment qualifieriez-vous votre niveau physique personnel ?'
	var reply = {type : 'text', content : com};
	return reply;
};

exports.comNvPhysique = function(nv){
	var com;
	var nvMax = randos.getNvMax()
	var alt;
	if (nv > nvMax){
		nv = nvMax;
	};
	if (nv <= 1){
		com = 'La marche en montagne sera pour vous une bonne reprise du sport ;) \n Je vous conseille cependant de ne pas vous lancer dans un trek trop difficile';
	} else if (nv<=2){
		com = 'En tant que sportifs occasionnels, vous allez apprécier mon sport préféré.';
	} else if (nv<=3) {
		com = 'En tant que sportifs réguliers, vous allez apprécier mon sport préféré.';
	} else if (nv>3){
		com = 'Vous êtes de vrais athlètes ! Je vous conseille de choisir un trek de bonne difficulté pour ne pas vous ennuyer ;)';
	};
	com += ' \n Comment qualifieriez-vous votre expérience en randonnée ?'
	var reply = {type : 'text', content : com};
	return(reply);
};


exports.comNvDifficulte = function(nvDiff){
	var com = '\n';
	switch(nvDiff){
		case 1 :
		com += 'Vous désirez un parcours très facile.';
		break;
		case 2 :
		com += 'Vous désirez un parcours assez facile.';
		break;
		case 1 :
		com += 'Vous désirez un parcours assez difficile.';
		break;
		case 1 :
		com += 'Vous désirez un parcours très difficile.';
		break;
	};
	return(com);
	
};

exports.comBudget = function(nv){
	var com;
	if (nv == 0){
		com = 'Ok, nous discuterons du prix plus tard.';
	} else if (nv <= 100){
		com = 'Je peux déjà vous dire qu\’avec un budget de cette gamme mes recommandations se cantonneront à la France et son voisinage';
	} else if(nv <= 500){
		com = 'Je peux déjà vous dire qu\’avec un budget de cette gamme mes recommandations se cantonneront à l\’Europe et son voisinage';
	} else if (nv == 1000000) {
		com = 'Ok, j\'aime avoir carte blanche ! :money_mouth_face:';
	} else {
		com = 'En voilà un budget intéressant !';
	};
	com += '\n De quelle distance environ comptez-vous vous éloigner de Paris ?';
	var reply = {type : 'text', content : com};
	return(reply);
};

exports.comEloignement = function(nv){
	var com;
	var profil = randos.getProfil();
	/*
	var budget = randos.getNvBudget();
	if (budget == 100){
		budget = 1;
	} else if(budget == 500){
		budget = 2;
	} else if (budget == 5000){
		budget = 3;
	};
	var delta =  budget - nv;
	if (nv == 0){
		com = 'Ok, je vais vous trouver un endroit sympa !';
	} else if ( budget == 0 || delta >= 0){
		com = 'Ok, je vais vous trouver un endroit sympa !';
	} else if (delta < 0){
		com = 'Compte-tenu de votre budget, nous allons devoir faire des compromis. Cependant, je vais faire de mon mieux.';
	};
	*/
	com = 'Ok, je vais vous trouver un endroit sympa !';
	if (profil == 'A' || profil == 'C'){
		com += '\n Maintenant que l\'on se connait un peu mieux, qu\'est-ce qui vous ferait plaisir pendant cette randonnée ?';
	} else {
		//TO DO
	};
	
	var reply = {type : 'text', content : com};
	return(reply);
};

exports.comNvRandonneur = function(nv){
	var com;
	if (nv <= 1){
		com = 'Je suis ravi de vous faire découvrir mon sport préféré ! \n Je vous conseille cependant de ne pas vous lancer dans un trek trop difficile';
	} else if (nv<=2){
		com = 'J\'espère que ce trek confirmera votre amour pour la montagne';
	} else if (nv<=3) {
		com = 'J\'espère que ce trek confirmera votre amour pour la montagne';
	} else if (nv>3){
		com = 'Vous êtes des experts ! Je vous conseille de choisir un trek de bonne difficulté pour ne pas vous ennuyer ;)';
	};
	//com += '\n Que prenez vous dans votre sac de randonneur ?';
	com += '\n Quel est votre budget par personne ?'	
	var reply = {type : 'text', content : com};
	return(reply);
};

/*
exports.comNvEquipement = function(){
	var com;
	com = 'c\'est noté :smile:';
	com += '\n Quel est votre budget par personne ?'
	var reply = {type : 'text', content : com};
	return(reply);
};
*/

exports.comNvDecouvertes = function(nv){
	var com = '';
	if(nv==1){
		com = '\n Vous souhaitez faire quelques découvertes :evergreen_tree:'
	} else if (nv == 0) {
		com = '';
	} else {
		com = '\n Vous souhaitez faire beaucoup de découvertes :chipmunk:'
	};
	return(com);
};

exports.comNvEvasion = function(nv){
	var com = '';
	if (nv == 1){
		com = '\n Vous voulez un lieu accessible assez facilement.';
	} else if (nv == 0) {
		com = '';
	} else {
		com = '\n Vous voulez un endroit isolé pour vous ressourcer.';
	};
	return(com);
};

exports.comNvActivites = function(nv){
	var com = '';
	if(nv == 1){
		com = '\n Vous aimeriez pratiquer quelques activités :bow_and_arrow:'
	} else if (nv == 0) {
		com = '';
	} else {
		com = '\n Vous aimeriez faire plusieurs activités :rowboat:'
	};
	return(com);
};

exports.comRecommandationValidee = function(){
	var com = 'Super ! Si vous souhaitez réserver votre voyage, je vous invite à cliquer ici. \n A bientôt :)';
	return(com);
};

exports.comRecap = function(){
	var com = '';
	com += 'D\'accord ' + rando.getPrenom() +', je résume :\n'
	// niveau physique
	var nvPhysique = randos.getNvPhysique();
	if(nvPhysique == 1){
		nvPhysique = 'débutant';
	} else if(nvPhysique == 2){
		nvPhysique = 'occasionnel';
	} else if(nvPhysique == 3){
		nvPhysique = 'régulier';
	} else if(nvPhysique == 4){
		nvPhysique = 'de haut niveau';
	};
	com += 'Vous êtes un sportif ' + nvPhysique;
	// niveau randonneur
	var nvRandonneur = randos.getNvRandonneur();
	if(nvRandonneur == 1){
		nvRandonneur = 'part en randonnée pour la première fois';
	} else if(nvRandonneur == 2){
		nvRandonneur = 'a déjà fait quelques randonnées';
	} else if(nvRandonneur == 3){
		nvRandonneur = 'a déjà fait plusieurs randonnées';
	} else if(nvRandonneur == 4){
		nvRandonneur = 'a déjà fait de multiples randonnées';
	};
	com += ' qui ' + nvRandonneur + '.';
	// budget et eloignement
	if (randos.getNvBudget() != 1000000){
		com += '\nVous avez un budget de quelques ' + randos.getNvBudget() + ' euros.';
	};
	if (randos.getNvEloignement() != 0){
		com += '\nVous aimeriez partir à environ ' + randos.getNvEloignement() + ' kilomètres.';
	}
	if (randos.getNvDifficulte() != null){
		com += '\n' + exports.comNvDifficulte(randos.getNvDifficulte());
	};
	if (randos.getNvDecouvertes() != null){
		com += '\n' + exports.comNvDecouvertes(randos.getNvDecouvertes());
	};
	if (randos.getNvEvasion() != null){
		com += '\n' + exports.comNvEvasion(randos.getNvEvasion());
	};
	if (randos.getNvActivites() != null){
		com += '\n' + exports.comNvActivites(randos.getNvActivites());
	};
	return(com);
};





// exports.comYseop = function(){
	// var com = texte;
	// var reply = {type : 'text', content : com};
	// return(reply);
// };

