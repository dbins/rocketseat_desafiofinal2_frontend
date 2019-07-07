import React from "react";
import store from "../store";
import { Redirect } from "react-router-dom";

export function authenticatedPage(Component) {
  const componentName = Component.displayName || Component.name || "Component";

  return class extends React.Component {
    static displayName = `Route(${componentName})`;

    renderPage() {
      return <Component {...this.props} />;
    }

    render() {
      const signedIn = store.getState().login.signedIn;
      if (signedIn) {
        return this.renderPage();
      } else {
        return <Redirect to="/" />;
      }
    }
  };
}
