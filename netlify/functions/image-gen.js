exports.handler = async (event, context) => {
    try {
        const body = JSON.parse(event.body || "{}");
        const prompt = body.prompt || "Islamic Architecture";
        const seed = Math.floor(Math.random() * 1e9);
        const imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt + ", cinematic, masterpiece")}?width=1024&height=1024&seed=${seed}&nologo=true`;

        return {
            statusCode: 200,
            body: JSON.stringify({
                success: true,
                imageUrl: imageUrl,
                engine: 'Netlify-Image-Core'
            })
        };
    } catch (error) {
        return { statusCode: 500, body: JSON.stringify({ error: 'Image generation failed' }) };
    }
};
