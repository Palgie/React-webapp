import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ComponentsPage.scss';
import Popover from '../Popover';
import PopoverContent from '../PopoverContent';
import Button from '../Button';
import TextBox from '../TextBox';

const title = 'UI Components';

class ComponentsPage extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.context.onSetTitle(title);
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{title}</h1>

          <Popover padded title="Remove Farzad Ban from team members?">
            <Button value="Cancel" type="button" transparent />
            <Button value="Remove from team" type="button" transparent warning />
          </Popover>

          <Popover
            padded
            heading="Milestones"
            desc="This thing is a milestone. They can be added to a task to mark a
            noteworthy happening. Client reviews, for example!"
          >
            <Button value="Alright!" type="button" size="small" length="short" />
          </Popover>

          <Popover
            size="medium"
            heading="Team page wireframe"
            desc="Create a new milestone for:"
            reverseHeadingOrder
          >
            <PopoverContent>
              <TextBox />
            </PopoverContent>
          </Popover>

          <Popover size="medium">
            <PopoverContent desc="Create a new project milestone">
              <TextBox />
            </PopoverContent>
          </Popover>
        </div>
      </div>
    );
  }

}

export default withStyles(ComponentsPage, s);
