import getHistory from '../app/helpers/getHistory'

it('renders correctly', () => {
    let history = ['1', '2', '3', '4', 'Bust', '6']

    expect(getHistory(history, 1)).toEqual(['1', ', 3', ', Bust'])
    expect(getHistory(history, 2)).toEqual(['2', ', 4', ', 6'])
});
