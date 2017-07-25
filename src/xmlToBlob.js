var xhr = require('w3c-xmlhttprequest');
var xml = require('simple-xml-dom')
const cc = require('./carac_client')

exports.xmlToString = function () { 
	var source = '<?xml version="1.0" encoding="UTF-8"?>'+
'<y:input xmlns:y="http://www.yseop.com/engine/3" xmlns:i18n="http://apache.org/cocoon/i18n/2.1" '+
'xmlns:ft="http://apache.org/cocoon/forms/1.0#template" xmlns:fi="http://apache.org/cocoon/forms/1.0#instance" '+
'xmlns:fd="http://apache.org/cocoon/forms/1.0#definition" xmlns:fb="http://apache.org/cocoon/forms/1.0#binding" >'+
'	<y:action command="init-dialog" sub-command=""/>'+
'	<y:data>'+
'		<y:instance yid="theGeneralData">'+
'			<traces>true</traces>'+
'			<reloadedData>true</reloadedData>'+
'			<saisieDeDonnees yid="SAISIE_1">'+
'				<nomClient>' + cc.getPrenom() + '</nomClient>'+
'				<ageMax>' + cc.getAgeMax() + '</ageMax>'+
'				<ageMin>' + cc.getAgeMin() + '</ageMin>'+
'				<dureeDeLaRandonnee>4</dureeDeLaRandonnee>'+
'				<dureeStricte yid="DUREE_PLUS_MOINS"/>'+
'				<isoleAccessible yid="' + cc.getNvEvasion() + '"/>'+
'				<niveauEloignement yid="' + cc.getNvEloignement() + '"/>'+
'				<niveauPhysique yid="' + cc.getNvPhysique() + '"/>'+
'				<niveauRandonneur yid="' + cc.getNvRandonneur() + '"/>'+
'				<niveauEquipement yid="' + cc.getNvEquipement() + '"/>'+
'				<niveauDifficulte yid="' + cc.getNvDifficulte() + '"/>'+
'				<niveauBudget yid="' + cc.getBudget() + '"/>'+
'				<niveauActivites yid="' + cc.getNvActivites() + '"/>'+
'			</saisieDeDonnees>'+
'			<reloadedData>false</reloadedData>'+
'			<dialogId>853880</dialogId>'+
'			<language yid="LANG_en"/>'+
'		</y:instance>'+
'	</y:data>'+
'	<y:dialog-session>'+
'		<y:dialog-id>R20170707070825-1</y:dialog-id>'+
'	</y:dialog-session>'+
'	<y:misc-in>'+
'		<y:version dialog="2.19.0.S" manager="2.9.0"/>'+
'		<y:language id="fr_FR"/>'+
'		<y:language id="fr"/>'+
'		<y:language id="en_US"/>'+
'		<y:language id="en"/>'+
'	</y:misc-in>'+
'</y:input>';
	xml.serialize(xml.parse(source));
	return(xml.serialize(xml.parse(source)).toString());
    //
}   
