export const UPDATE_PROMOTERS = 'UPDATE_PROMOTERS';
export const UPDATE_PASSIVES = 'UPDATE_PASSIVES';
export const UPDATE_DETRACTORS = 'UPDATE_DETRACTORS';
export const CLEAR_FORM = 'CLEAR_FORM';


export const updatePromoters = (total) => (
    {
        type: UPDATE_PROMOTERS,
        payload: total
    }
)

export const updatePassives = (total) => (
    {
        type: UPDATE_PASSIVES,
        payload: total
    }
)

export const updateDetractors = (total) => (
    {
        type: UPDATE_DETRACTORS,
        payload: total
    }
)

export const toggleClear = (bool) => (
    {
        type: CLEAR_FORM,
        payload: !bool
    }
)

