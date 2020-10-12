import React from 'react'
import "./index.scss";
export default function Index() {
    return (
        <div className="select-Option-div">
        
{/* <form> */}
	
	<ul class="select">
		<li>
			<input class="select_close" type="radio" name="awesomeness" id="awesomeness-close" value=""/>
			<span class="select_label select_label-placeholder">Porfolio</span>
		</li>
		
		<li class="select_items">
			<input class="select_expand" type="radio" name="awesomeness" id="awesomeness-opener"/>
			<label class="select_closeLabel" for="awesomeness-close"></label>
			
			<ul class="select_options">
				<li class="select_option">
					<input class="select_input" type="radio" name="awesomeness" id="awesomeness-ridiculous"/>
					<label class="select_label" for="awesomeness-ridiculous">Web Development</label>
				</li>

				<li class="select_option">
					<input class="select_input" type="radio" name="awesomeness" id="awesomeness-reasonable"/>
					<label class="select_label" for="awesomeness-reasonable">Data Science</label>
				</li>

			</ul>
			
			<label class="select_expandLabel" for="awesomeness-opener"></label>
		</li>
	</ul>
	
{/* </form> */}

        </div>
    )
}
