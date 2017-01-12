/**
* External dependencies
*/
import React from 'react';
/**
 * Internal dependencies
 */
import FormSelect from 'components/forms/form-select';
import FormLabel from 'components/forms/form-label';
import FormCheckbox from 'components/forms/form-checkbox';

const CarouselSettings = props => {
	return (
		<div className="media-settings__module-settings is-indented">
			<FormLabel>
				<FormCheckbox
					name="carousel_display_exif"
					checked={ props.carousel_display_exif || false }
					onChange={ props.handleCheckbox }
					disabled={ props.submittingForm } />
				<span>{ props.translate( 'Show photo metadata (Exif) in carousel, when available' ) }</span>
			</FormLabel>
			<FormLabel htmlFor="carousel_background_color">
				{ props.translate( 'Background color' ) }
			</FormLabel>
			<FormSelect
				name="carousel_background_color"
				id="carousel_background_color"
				value={ props.carousel_background_color || '' }
				onChange={ props.handleSelect }
				disabled={ props.submittingForm } >
				<option value={ 'black' } key={ 'carousel_background_color_black' }>
					{ props.translate( 'Black' ) }
				</option>
				<option value={ 'white' } key={ 'carousel_background_color_white' }>
					{ props.translate( 'White' ) }
				</option>
			</FormSelect>
		</div>
	);
};

export default CarouselSettings;
