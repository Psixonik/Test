DROP TABLE Ads;
CREATE TABLE CategoryAds
(
	Id INT primary key IDENTITY(1,1),
	Category NVARCHAR(50) 
)
INSERT INTO CategoryAds (Category)
VALUES  (N'Toys'),
		(N'Online Lessons');

CREATE TABLE TypeAds
(
	Id INT primary key IDENTITY(1,1),
	Type NVARCHAR(50) 
)
INSERT INTO TypeAds (Type)
VALUES  (N'TextAd'),
		(N'HtmlAd'),
		(N'BannerlAd'),
		(N'VidioAd');

CREATE TABLE Ads 
(
	Id INT primary key IDENTITY(1,1),
	AdTypeId int,
	CategoryId int,
	Cost INT,
	Content NVARCHAR(500),
	FOREIGN KEY (CategoryId) REFERENCES CategoryAds (Id),
	FOREIGN KEY (AdTypeId) REFERENCES TypeAds (Id),
);
INSERT INTO Ads (AdTypeId,CategoryId,Cost,Content)
VALUES  (1,1,11,N'First'),
		(2,2,22,N'Second');

