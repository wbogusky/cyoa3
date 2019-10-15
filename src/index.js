import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class NamePage extends Component {
  render() {
    // fetch('https://www.metaweather.com/api/location/44418/')
    // .then(response => response.json());

    return (
      <div className="page">
        <p>
          Greetings, traveler! What is your name?
          <br />
        </p>
        <input
          type="text"
          value={this.props.data.name}
          onChange={event =>
            this.props.setStateFunction("name", event.target.value)
          }
        />{" "}
        <br />
        <button onClick={() => this.props.goFunction(StartPage)}>
          Continue...
        </button>
      </div>
    );
  }
}

class StartPage extends Component {
  render() {
    return (
      <div className="page">
        <p>
          Welcome, {this.props.data.name}! How would you like to get to your
          destination?
        </p>
        <button onClick={() => this.props.goFunction(TrainPage)}>Train</button>
        <button onClick={() => this.props.goFunction(ShipPage)}>Ship</button>
      </div>
    );
  }
}

class ShipPage extends Component {
  render() {
    return (
      <div className="page">
        <p>
          You board the ship and find its deck crawling with frogs. You
          accidentally step on one, slip, fall, and die.
        </p>
        <button onClick={() => this.props.goFunction(NamePage)}>
          Restart?
        </button>
      </div>
    );
  }
}

class TrainPage extends Component {
  render() {
    var destPage;
    if (this.props.data.seat === "97A") {
      destPage = OtherSeatPage;
    } else {
      destPage = SeatPage;
    }
    console.log(this.props.data.seat);
    return (
      <div className="page">
        <p>
          Welcome aboard the train, {this.props.data.name}! Please make your way
          to your seat. What is the number?
          <br />
        </p>
        <select
          onChange={event =>
            this.props.setStateFunction("seat", event.target.value)
          }
        >
          <option value="12E">12E</option>
          <option value="97A">97A</option>
        </select>
        <button onClick={() => this.props.goFunction(destPage)}>
          Continue...
        </button>
      </div>
    );
  }
}

class SeatPage extends Component {
  render() {
    return (
      <div className="page">
        <p>
          You walk to 12E and take a seat. It's comfortable, but lacking in
          legroom thanks to your facing passenger.
        </p>
        <button onClick={() => this.props.goFunction(CryPage)}>Cry</button>
        <button onClick={() => this.props.goFunction(WindowPage)}>
          Stare out the window
        </button>
      </div>
    );
  }
}

class OtherSeatPage extends Component {
  render() {
    return (
      <div className="page">
        <p>
          You walk to 97A and take a seat. It's comfortable, and no one is
          seated across from you, so you put your feet up.
        </p>
        <button onClick={() => this.props.goFunction(SleepPage)}>
          Fall asleep
        </button>
      </div>
    );
  }
}

class SleepPage extends Component {
  render() {
    return (
      <div className="page">
        <p>
          You do your best to position your head against the window in a
          comfortable fashion. A sense of warmth washes over you as fall into a
          light sleep.
        </p>
        <button onClick={() => this.props.goFunction(DreamPage)}>Dream</button>
      </div>
    );
  }
}

class DreamPage extends Component {
  render() {
    return (
      <div className="page">
        <p>
          Vague rumbling and a general judder transform from the train's
          constant interaction with its tracks become an earthquake as you step
          through a doorway into the middle of an ancient city, dirt brick
          towers crumbling in all directions. In one direction, towers have
          already fallen and there appears a forest on the other side.
        </p>
        <button onClick={() => this.props.goFunction(RunPage)}>Run!</button>
        <button onClick={() => this.props.goFunction(HidePage)}>Hide!</button>
      </div>
    );
  }
}

class RunPage extends Component {
  render() {
    return (
      <div className="page">
        <p>
          You run and run in the direction of the forest. Upon arrival, you pant
          like a dog and lean against a tree while catching your breath. You
          watch as the last of the structures collapse. Behind you, you hear
          ribbeting.
        </p>
        <button onClick={() => this.props.goFunction(WarriorPage)}>
          Turn around
        </button>
      </div>
    );
  }
}

class WarriorPage extends Component {
  render() {
    return (
      <div className="page">
        <p>
          You whip yourself around to identify the source of the ribbeting. A
          large ovoid shadow looms over you, impossible to make out its shape as
          the sun sits right above its silhouette. Gradually, your eyes adjust
          to reveal a colossal frog in full armor seated atop a visibly strained
          horse, aided slightly by the spear in the frog's right hand.
        </p>
        <button onClick={() => this.props.goFunction(QuestionPage)}>
          "Who are you?"
        </button>
      </div>
    );
  }
}

class QuestionPage extends Component {
  render() {
    return (
      <div className="page">
        <p>
          The beastly amphibian croaks, "I need not busy myself with identifying
          myself to human scum." It retracts its spear and sends it directly
          into your heart. Your vision blurs and you feel yourself thud against
          the dirt.
        </p>
        <button onClick={() => this.props.goFunction(WakePage)}>
          Continue..
        </button>
      </div>
    );
  }
}

class HidePage extends Component {
  render() {
    return (
      <div className="page">
        <p>
          You jump back into the doorway you came through, however this proves
          to be a terrible idea as light begins to peek through the growing
          cracks in the brick walls. You are crushed as the roof caves in upon
          your head. You are dead.
        </p>
        <button onClick={() => this.props.goFunction(WakePage)}>Wake up</button>
      </div>
    );
  }
}

class WakePage extends Component {
  render() {
    return (
      <div className="page">
        <p>
          You wake up and shiver at your unfortunate end. You are still drowsy.
        </p>
        <button onClick={() => this.props.goFunction(SleepPage)}>
          Fall back asleep
        </button>
        <button onClick={() => this.props.goFunction(ExplorePage)}>
          Explore the train
        </button>
      </div>
    );
  }
}

class ExplorePage extends Component {
  render() {
    return (
      <div className="page">
        <p>
          You stand up and walk around. It occurs to you to investigate the 12th
          car as a sign says that there is a food cart in said car.
        </p>
        <button onClick={() => this.props.goFunction(SeatPage)}>
          Walk to Car 12
        </button>
      </div>
    );
  }
}

class CryPage extends Component {
  render() {
    return (
      <div className="page">
        <p>
          You shed warms tears, and your shoulders bounce with each sob. The
          giant frog sitting in front of you is oblivious.
        </p>
        <button onClick={() => this.props.goFunction(FrogPage)}>Stop</button>
        <button onClick={() => this.props.goFunction(CryPage)}>Continue</button>
      </div>
    );
  }
}

class FrogPage extends Component {
  render() {
    return (
      <div className="page">
        <p>
          You stop crying and stare at the gargantuan frog seated in opposite
          yourself. It's wide, flat mouth looks like a table supporting its
          baseball-sized eyeballs, each more vacant than the other.
        </p>
        <button onClick={() => this.props.goFunction(TalkPage)}>Talk</button>
        <button onClick={() => this.props.goFunction(WindowPage)}>
          Stare out the window
        </button>
      </div>
    );
  }
}

class WindowPage extends Component {
  render() {
    return (
      <div className="page">
        <p>
          You try to keep your eyes on the horizon as the trees start to whip
          by, but the enormous eyes of the frog seated across from you are
          reflected in the glass and your head keeps turning to inspect its
          mottled and filmy skin.
        </p>
        <button onClick={() => this.props.goFunction(TalkPage)}>Talk</button>
      </div>
    );
  }
}

class TalkPage extends Component {
  render() {
    return (
      <div className="page">
        <p>"Good evening my friend. What is your final destination?"</p>
        <br />
        <p>"..."</p>
        <p>"Do you have a name sir?"</p>
        <br />
        <p>"... Frog. Big Frog actually."</p>
        <button onClick={() => this.props.goFunction(PryPage)}>
          "Big Frog? Any relation to the renowned inventor, Big Toad?"
        </button>
        <button onClick={() => this.props.goFunction(QuietPage)}>
          "Ah, Big Frog then."
        </button>
      </div>
    );
  }
}

class PryPage extends Component {
  render() {
    return (
      <div className="page">
        <p>"Big Frog? Any relation to the renowned inventor, Big Toad?"</p>
        <p>"I should eat you for inquiring, sir."</p>
        <p>"I meant no disrespect!"</p>
        <br />
        <p>
          "...that may well be, however you should know that frogs and toads
          hold a very longstanding grudge against each other."
        </p>
        <button onClick={() => this.props.goFunction(QuietPage)}>
          "Really, I'm truly sorry, I–"
        </button>
      </div>
    );
  }
}

class QuietPage extends Component {
  render() {
    return (
      <div className="page">
        <p>
          You and your portly, warted companion sit in absolute silence. You
          avoid eye contact despite the seemingly unbreakable gaze returned by
          Big Frog's glazed eyes.
        </p>
        <button onClick={() => this.props.goFunction(ArrivePage)}>
          Continue...
        </button>
      </div>
    );
  }
}

class ArrivePage extends Component {
  render() {
    return (
      <div className="page">
        <p>
          The train enages its brakes, and the lurch nearly sends you from your
          seat. You get off the train and find yourself in an ancient city, the
          sun rising over the dirt brick skyline.
        </p>
        <br />
        <p>The end.</p>
        <button onClick={() => this.props.goFunction(NamePage)}>
          Restart?
        </button>
      </div>
    );
  }
}

// I hope I'm not bothering you with my conversation. I've a reputation as a bit of a chatty-kathy. Anyway, I find it helps these evening train rides pass much quicker.

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageClass: NamePage
    };
  }

  goToPage(pageClass) {
    this.setState({
      pageClass: pageClass
    });
  }

  render() {
    var app = this;

    function setState(key, value) {
      let newState = {};
      newState[key] = value;
      app.setState(newState);
    }

    function goFunction(pageClass) {
      app.goToPage(pageClass);
    }

    return (
      <div className="App">
        <this.state.pageClass
          data={this.state}
          setStateFunction={setState}
          goFunction={goFunction}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
