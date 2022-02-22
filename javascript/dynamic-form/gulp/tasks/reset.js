import del from 'del'

export const reset = async () => {
    return await del(app.path.clean)
}