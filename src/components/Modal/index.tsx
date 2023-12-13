import { useEffect, useRef } from 'react';
import { useKey } from 'react-use';
import twMerge from 'twMerge';

import Button from 'molecules/Button';
import Form from 'molecules/Form';
import Icon from 'molecules/Icon';

import modalStyles, {
  closeModalButton,
  modalColumn,
  modalContainer,
  modalContent,
  modalContentRow,
  modalVideoEmbed,
  modalWrapper,
} from 'components/Modal/modal.styles';
import ReactPortal from 'components/Modal/reactPortal';

import getVideoId from 'utils/getVideoId';

import type { ContentfulComponentModal } from 'graphqlTypes';
import type { ButtonProps } from 'molecules/Button';
import type { Dispatch, FC, SetStateAction } from 'react';

export interface ModalProps extends ContentfulComponentModal {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const Modal: FC<ModalProps> = ({ isOpen, setIsOpen, embedLink, formId, heading, subhead, cta }) => {
  const type = embedLink ? 'embed' : 'form';
  const hasContent = !!heading || !!subhead || !!cta;
  const modalRef = useRef<HTMLButtonElement>(null);
  const closeModal = () => setIsOpen(false);

  useKey('Escape', closeModal);

  useEffect(() => {
    document.body.style.overflowY = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      modalRef?.current?.focus();
    }
  }, [isOpen, modalRef]);

  if (!isOpen) {
    return null;
  }

  return (
    <ReactPortal wrapperId="modal">
      <button
        ref={modalRef}
        className={twMerge(modalStyles({ isOpen }))}
        onClick={e => {
          e.stopPropagation();
        }}
      />
      <div className={twMerge(modalWrapper({ isOpen }))}>
        <div className={twMerge(modalContainer())}>
          <button
            className={twMerge(closeModalButton())}
            tabIndex={0}
            onClick={e => {
              e.stopPropagation();
              closeModal();
            }}
          >
            <Icon icon="x" size={24} />
          </button>
          <div className={twMerge(modalColumn({ type }))}>
            {embedLink && isOpen && (
              <iframe
                className={twMerge(modalVideoEmbed())}
                src={`https://www.youtube.com/embed/${getVideoId(embedLink)}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen={true}
                aria-label="embed video"
              />
            )}
            {formId && <Form formId={formId} />}
            {hasContent && (
              <div className={twMerge(modalContentRow({ type: 'container' }))}>
                <div className={twMerge(modalContentRow({ type: 'content' }))}>
                  {heading && <p className={modalContent({ type: 'heading' })}>{heading}</p>}
                  {subhead && <p className={modalContent({ type: 'subhead' })}>{subhead}</p>}
                </div>
                {cta && (
                  <div className={twMerge(modalContentRow({ type: 'cta' }))}>
                    <Button {...(cta as ButtonProps)} />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </ReactPortal>
  );
};

export default Modal;
