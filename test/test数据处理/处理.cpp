#include<bits/stdc++.h>
using namespace std;

void test()
{
	puts("1");
}

struct Data{
	int id;
	string q;
	string a,b;
	Data()
	{
		id=0;
		q=a=b="";
	}
};
Data data[100];
int cnt;



int main()
{
	freopen("data.in","r",stdin);
	freopen("data.out","w",stdout);
	while(true)
	{
		string s;
		getline(cin,s);
//		cout<<s<<endl;
		if(s=="") continue;
		if(s[0]=='#')
		{
			break;
		}
		int x=0;
		if(isdigit(s[0]))
		{
			cnt++;
			while(isdigit(s[0]))
			{
				x=x*10+s[0]-'0';
				s.erase(0,1);
			}
//			s.erase(0,1);
			data[cnt].id=x;
			if(s.find('A')==-1)
			{
				data[cnt].q=s;
				continue;
			}
		}
		if(s.find('A')!=-1)
		{
			data[cnt].a=s;
		}
		if(s.find('B')!=-1)
		{
			data[cnt].b=s;
		}
	}
	for(int i=1;i<=cnt;i++)
	{
		cout<<"{"<<endl;
		cout<<"id:"<<data[i].id<<",\n";
		cout<<"question:'"<<data[i].q<<"',\n";
		cout<<"optionA:'"<<data[i].a<<"',\n";
		cout<<"optionB:'"<<data[i].b<<"',\n";
		cout<<"},"<<endl;
	 } 
	
	return 0;
 } 
