import jwt from 'jsonwebtoken';

export const generatetoken = (userId, res) => {
    const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, { 
        expiresIn: '7d' 
    });

    res.cookie('jwt', token, {
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        httpOnly: true,
        secure: process.env.NODE_ENV != 'development',
        sameSite: 'strict',
    });

    return token;
}