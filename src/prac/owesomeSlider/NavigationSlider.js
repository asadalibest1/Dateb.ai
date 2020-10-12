import AwesomeSlider from "react-awesome-slider"
import 'react-awesome-slider/dist/styles.css';

import { 
  Provider,
  Link,
  withNavigationContext,
  withNavigationHandlers
} from "react-awesome-slider/dist/navigation";

// Wrapp the AwesomeSlider component with the navigationHandlers
const NavigationSlider = withNavigationHandlers(AwesomeSlider);

// Create an AwesomeSlider instance with some content
export default function NavigationSlider(){
    return (
        <NavigationSlider
          className="awesome-slider"
          media={[
            {
              slug: "page-one",
              className: "page-one",
              children: () => <p>Page One</p>
            },
            {
              slug: "page-two",
              className: "page-two",
              children: () => <p>Page Two</p>
            }
          ]}
        />
       )
    }
