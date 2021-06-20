import { fireEvent, render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import { setForm } from './actions';
import ReviewFormContainer from './ReviewFormContainer';

jest.mock('react-redux');

describe('ReviewFormContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockReturnValue(dispatch);

    useSelector.mockImplementation((selector) => selector({
      form: {
        score: '3',
        description: 'soso',
      },
    }));
  });

  it('listens to change events', () => {
    const { getByRole } = render(<ReviewFormContainer />);

    const controls = [
      { name: 'score', value: '5' },
      { name: 'description', value: 'good' },
    ];

    controls.forEach(({ name, value }) => {
      const input = getByRole('textbox', { name });

      fireEvent.change(input, { target: { value } });

      expect(dispatch).toBeCalledWith(setForm({ name, value }));
    });
  });

  it('listens to button click event', () => {
    const { getByRole } = render(<ReviewFormContainer />);
    fireEvent.click(getByRole('button', { name: '리뷰 남기기' }));

    expect(dispatch).toBeCalled();
  });
});