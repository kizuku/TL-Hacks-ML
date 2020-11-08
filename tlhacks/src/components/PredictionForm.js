import React, { Component } from 'react'
import ChampSelector from './ChampSelector.js'
import TeamSelector from './TeamSelector.js'

const axios = require('axios');

const champions = ["Aatrox", "Ahri", "Akali", "Alistar", "Amumu", "Anivia", "Annie", "Aphelios", "Ashe", "Aurelion Sol", "Azir", "Bard", "Blitzcrank", "Brand", "Braum", "Caitlyn", "Camille", "Cassiopeia", "Cho Gath", "Corki", "Darius", "Diana", "Dr.Mundo", "Draven", "Ekko", "Elise", "Evelynn", "Ezreal", "Fiddlesticks", "Fiora", "Fizz", "Galio", "Gangplank", "Garen", "Gnar", "Gragas", "Graves", "Hecarim", "Heimerdinger", "Illaoi", "Irelia", "Ivern", "Janna", "Jarvan IV", "Jax", "Jayce", "Jhin", "Jinx", "Kai Sa", "Kalista", "Karma", "Karthus", "Kassadin", "Katarina", "Kayle", "Kayn", "Kennen", "Kha Zix", "Kindred", "Kled", "Kog Maw", "Leblanc", "Lee Sin", "Leona", "Lillia", "Lissandra", "Lucian", "Lulu", "Lux", "Malphite", "Malzahar", "Maokai", "Master Yi", "Miss Fortune", "Mordekaiser", "Morgana", "Nami", "Nasus", "Nautilus", "Neeko", "Nidalee", "Nocturne", "Nunu", "Olaf", "Orianna", "Ornn", "Pantheon", "Poppy", "Pyke", "Qiyana", "Quinn", "Rakan", "Rammus", "Rek Sai", "Renekton", "Rengar", "Riven", "Rumble", "Ryze", "Samira", "Sejuani", "Senna", "Seraphine", "Sett", "Shaco", "Shen", "Shyvana", "Singed", "Sion", "Sivir", "Skarner", "Sona", "Soraka", "Swain", "Sylas", "Syndra", "Tahm Kench", "Taliyah", "Talon", "Taric", "Teemo", "Thresh", "Tristana", "Trundle", "Tryndamere", "Twisted Fate", "Twitch", "Udyr", "Urgot", "Varus", "Vayne", "Veigar", "Vel Koz", "Vi", "Viktor", "Vladimir", "Volibear", "Warwick", "Wukong", "Xayah", "Xerath", "Xin Zhao", "Yasuo", "Yone", "Yorick", "Yuumi", "Zac", "Zed", "Ziggs", "Zilean", "Zoe", "Zyra"]
const teams = ["Team Liquid", "TSM", "Cloud9", "FlyQuest", "G2 Esports", "Fnatic", "MAD Lions", "Rogue", "DAMWON Gaming", "Gen.G", "T1", "DRX", "Suning", "Top Esports", "Invictus Gaming", "FunPlus Phoenix"]

class PredictionForm extends Component {
    constructor(props) {
        super(props);
        this.state = {TeamA: "",
                      TopA: "",
                      JgA: "",
                      MidA: "",
                      BotA: "",
                      SupA: "",
                      TeamB: "",
                      TopB: "",
                      JgB: "",      
                      MidB: "",
                      BotB: "",
                      SupB: "",
                      taken: []
                    };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this)
        this.filterOptions = this.filterOptions.bind(this)
    }

    handleChange(event) {
        this.setState({[event.target.id]: event.target.value,
                       taken: this.state.taken.concat([event.target.value])});
    }

    handleSubmit(event) {
        console.log("ok")
        console.log(this.state)
        let headerString = "predict:" + this.state.TeamA + "/" + this.state.teamB + ":" + 
                        this.state.TopA + "," + this.state.JgA + "," + this.state.MidA + "," + this.state.BotA + "," + this.state.SupA + ":" +
                        this.state.TopB + "," + this.state.JgB + "," + this.state.MidB + "," + this.state.BotB + "," + this.state.SupB
        console.log(headerString)
        this.getPrediction(headerString)
    }

    getPrediction(headerString) {
        axios.get('/calc', {
            headers: {
                eggsalad : headerString
            }
        })
            .then(response => {
                // show it! 
            })
            .catch(error => {
                console.log(error)
            })
    }

    componentDidMount() {
        document.getElementById("predictButton").addEventListener("click", function(event){
            event.preventDefault()
        });
    }

    filterOptions(option) {
        return !(this.state.taken.includes(option));
    }

    render() {
        return (
            <form name="predict">
                <div id="team1" className="team">
                    <TeamSelector value={this.state.value} onChange={this.handleChange} label="TeamA" options={teams}/>
                    <ChampSelector value={this.state.value} onChange={this.handleChange} indent={false} label="TopA" options={champions}/>
                    <ChampSelector value={this.state.value} onChange={this.handleChange} indent={true} label="JgA" options={champions}/>
                    <ChampSelector value={this.state.value} onChange={this.handleChange} indent={false} label="MidA" options={champions}/>
                    <ChampSelector value={this.state.value} onChange={this.handleChange} indent={true} label="BotA" options={champions}/>
                    <ChampSelector value={this.state.value} onChange={this.handleChange} indent={false} label="SupA" options={champions}/>
                </div>
                <div id="team2" className="team">
                    <TeamSelector value={this.state.value} onChange={this.handleChange} label="TeamB" options={teams.filter(this.filterOptions)}/>
                    <ChampSelector value={this.state.value} onChange={this.handleChange} indent={false} label="TopB" options={champions}/>
                    <ChampSelector value={this.state.value} onChange={this.handleChange} indent={true} label="JgB" options={champions}/>
                    <ChampSelector value={this.state.value} onChange={this.handleChange} indent={false} label="MidB" options={champions}/>
                    <ChampSelector value={this.state.value} onChange={this.handleChange} indent={true} label="BotB" options={champions}/>
                    <ChampSelector value={this.state.value} onChange={this.handleChange} indent={false} label="SupB" options={champions}/>
                </div>
                <button onClick={this.handleSubmit} id="predictButton">hi</button>
            </form>
        )
    }
}

export default PredictionForm