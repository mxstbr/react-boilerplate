import React from 'react';
import {Helmet} from 'react-helmet';
import {Route} from 'react-router';
import {Switch} from 'react-router-dom';
import PropTypes from 'prop-types';
import {Breadcrumb} from 'semantic-ui-react';
import CreateManufacturerForm from './container/create';
import ViewManufacturer from './container/view';

const BreadcrumbExampleTinySize = () => (
  <Breadcrumb size="tiny">
    <Breadcrumb.Section link>Home</Breadcrumb.Section>
    <Breadcrumb.Divider icon="right chevron" />
    <Breadcrumb.Section active>Manufacturer</Breadcrumb.Section>
  </Breadcrumb>
);

/* eslint-disable react/prefer-stateless-function */
export class ManufacturerContainer extends React.Component {
  render() {
    const { match } = this.props;
    return (
      <article>
        <Helmet>
          <title>Create Manufacturer</title>
          <meta
            name="description"
            content="Create Manufacturer for the products"
          />
        </Helmet>
        <div>
          <BreadcrumbExampleTinySize />
          <Switch>
            <Route
              exact
              path={`${match.url}/`}
              render={() => <div><span>hello there</span></div>}
            />
            <Route
              path={`${match.url}/view`}
              component={ViewManufacturer}
            />
            <Route
              path={`${match.url}/create`}
              render={() => <CreateManufacturerForm isEditMode={false} id='473248'/>}
            />
          </Switch>
        </div>
      </article>
    );
  }
}

ManufacturerContainer.propTypes = {
  match: PropTypes.object,
};

export default ManufacturerContainer;
