import React from 'react';

const LanguageContext = React.createContext();
const LanguageProvider = LanguageContext.Provider;
const LanguageConsumer = LanguageContext.Consumer;

class LanguageProviderComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { language: 'sp', };
    this.updateLanguage = this.updateLanguage.bind(this);
  }

  updateLanguage = (event) =>
    this.setState({
      language: event.target.value
    });

  render() {
    return(
      <LanguageProvider value={{
        language: this.state.language,
        updateLanguage: this.updateLanguage
      }}>
        {this.props.children}
      </LanguageProvider>
    )
  }
 }

const TranslatableContent = ({dictionary}) => (
  <LanguageConsumer>
    {({ language }) => dictionary[language]}
  </LanguageConsumer>
);

const Header = () => (
  <LanguageConsumer>
    {({ updateLanguage }) => (
      <header> Switch Language to:
        <select onChange={updateLanguage}>
          <option value='sp'>Spanish</option>
          <option value='fr'>French</option>
          <option value='en'>English</option>
        </select>
      </header>
    )}
  </LanguageConsumer>
)

class App extends React.Component {
  render() {
    return (
      <LanguageProviderComponent>
        <Header />
        <TranslatableContent
          dictionary={{
            fr: 'Bonjour Charles!',
            en: 'Good Morning Charles!',
            sp: 'Buenos Dias Carlos!'}}
        />
      </LanguageProviderComponent>
    );
  }
}

export default App;
