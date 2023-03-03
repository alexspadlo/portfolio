import React, { FC, useEffect, ReactNode } from 'react'
import GCFontAwe from '@generic/GCFontAwe'
import $ from 'jquery'
import s from './PopUp.scss'

export interface PopupProps {
	closePopup?: () => void,
	modalContent?: ReactNode | string,
	isLarge?: boolean,
	noBackDrop?: boolean,
	customSize?: string | undefined
}

export const PopUp: FC<PopupProps> = ({ closePopup, modalContent, isLarge, noBackDrop, customSize }) => {

	useEffect(() => {
		$(document).on('hidden.bs.modal', '#popUpAlex', () => {
			if (!closePopup) return null
			return closePopup()

		})
		return () => $(document).off('hidden.bs.modal', '#popUpAlex')
	}, [])

	if (!modalContent) return null

	const moDalstyle = customSize ? { maxWidth: '2000px', width: `${customSize}` } : {}
	return (
		<section className="w-100">
			<div className="modal fade" data-backdrop={`${noBackDrop ? 'static' : true}`} id="popUpAlex" tabIndex={-1} role="dialog" aria-labelledby="PopUpTitle" aria-hidden="true">
				<div style={moDalstyle} className={`modal-dialog ${isLarge ? 'modal-lg' : ''} ${s.popUpFix} modal-dialog-centered`} role="document">
					<div className={`modal-content ${s.modalBorderRadius}`}>
						<div className="modal-body">
							<section className='w-100 text-right'>
								<span data-dismiss="modal">
									<GCFontAwe nameIco='fa-times' customClass={`${s.pointer} h2 pr-2 pl-2 text-danger`} />
								</span>
							</section>
							{modalContent}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
export default PopUp
