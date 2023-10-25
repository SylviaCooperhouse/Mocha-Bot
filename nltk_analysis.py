import nltk
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords
from nltk.probability import FreqDist

def analyze_message(message):
    # Tokenize the message into words
    words = word_tokenize(message)

    # Remove stopwords (common words like "the," "is," "a," etc.)
    words = [word for word in words if word.lower() not in stopwords.words("english")]

    # Calculate word frequencies
    fdist = FreqDist(words)

    # Get the most common words
    common_words = fdist.most_common(5)

    return common_words