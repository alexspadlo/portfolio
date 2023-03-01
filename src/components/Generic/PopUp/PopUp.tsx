import React, { FC, useEffect, ReactNode } from 'react'
import $ from 'jquery'
import s from './PopUp.scss'

export interface PopupProps {
	closePopup?: () => void,
	modalContent?: ReactNode | string,
	isLarge?: boolean,
	noBackDrop?: boolean,
	customSize?: string | undefined
}

export const PopUp: FC<PopupProps> = ({
 closePopup, modalContent, isLarge, noBackDrop, customSize, 
}) => {
	if (!modalContent || !closePopup) return null
	useEffect(() => {
		$(document).on('hidden.bs.modal', '#popUpAlex', () => {
			closePopup()
		})
		return () => $(document).off('hidden.bs.modal', '#popUpAlex')
	}, [])
	
	const moDalstyle = customSize ? { maxWidth: `${customSize}` } : {}
	return (
		<section className="w-100">
			<div className="modal fade" data-backdrop={`${noBackDrop ? 'static' : true}`} id="PopUp" tabIndex={-1} role="dialog" aria-labelledby="PopUpTitle" aria-hidden="true">
				<div style={moDalstyle} className={`modal-dialog ${isLarge ? 'modal-lg' : ''} ${s.popUpFix} modal-dialog-centered`} role="document">
					<div className={`modal-content ${s.modalBorderRadius}`}>
						<div className="modal-body">
							<p className="h2 pr-2 pl-2 text-right text-danger"><i data-dismiss="modal" id="dismissModal" className={`fas ${s.pointer} fa-times`} /></p>
							{modalContent}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
export default PopUp
