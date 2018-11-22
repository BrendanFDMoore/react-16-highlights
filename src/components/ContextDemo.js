// Example of React Context with translated content
import React from 'react';

// First we need to create a context
// We can pass a default value object to createContext for cases where the provider does not provide one.

const LanguageContext = React.createContext();

// The above code creates a context from where we get a consumer and a provider:
const LanguageProvider = LanguageContext.Provider;
const LanguageConsumer = LanguageContext.Consumer;

// Now we can create a class component that will work as the wrapper provider for this context.
// This class component will wrap the App so the whole application has access to the values of this provider.
// The component will hold and handle the state of the language, therefore it will be able to share the state and method
// with any of the components down the wrapping point.

class LanguageProviderComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { language: 'sp', };
        this.updateLanguage = this.updateLanguage.bind(this);
    }

    updateLanguage = (event) => this.setState({ language: event.target.value });

    render() {
        return(
            <LanguageProvider value={{ language: this.state.language, updateLanguage: this.updateLanguage }}>
                {this.props.children}
            </LanguageProvider>
        )
    }
 }

// Now by wrapping the App with the provider we can make the language value and the updateLanguage method available
// all the way down from there.

// Next we will create a component TranslatableContent that will use the consumer of the context.
// The consumer is subscribed to any changes in the provider.
// The consumer requires a function as a child in order to process the value(s) shared by the provider and returns a react node.

const TranslatableContent = (props) => (
    <LanguageConsumer>
        {({ language }) => props.dictionary[language]}
    </LanguageConsumer>
);

// Now let’s use the method shared by the provider in order to trigger the language switch.
// We will create a Header component. Notice again that the consumer uses a function-as-a-child to render a React Node.

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

// We are almost done, so far we have the provider component that holds and handles the state for the language selection.
// Also two consumers are already coded and ready to use the state and method shared by the provider. One will use "language"
// to render content based on a dictionary object.
// The other will use the "updateLanguage" method to handle the event triggered by the selection of the language in the header.
// Let's put together the App component.

class App extends React.Component {
    render() {
        return (
            <LanguageProviderComponent>
                <Header />
                <TranslatableContent
                    dictionary={{fr: 'Bonjour Charles!', en: 'Good Morning Charles!', sp: 'Buenos Dias Carlos!'}} />
            </LanguageProviderComponent>
        );
    }
}

export default App;